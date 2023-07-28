const apiKey = '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';
const serverless = require('serverless-http');
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
var cors = require('cors')
const app = express()

const configuration = new Configuration({
	apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

// CORS 이슈 해결 
let corsOptions = {
	origin: 'https://fortunechat.pages.dev',
	credentials: true
}

app.use(cors(corsOptions));
// app.use(cors());

// post 요청 시 필요한 부분 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// POST method route
app.post('/fortuneTell', async function (req, res) {
	let { myDateTime, userMessages, assistantMessages} = req.body
	// console.log(userMessages);
	// console.log(assistantMessages);

	let todayDateTime = new Date().toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'});

	let messages = [
		{role: "system", content: "당신은 세계 최고의 점성술사입니다. 당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신의 이름은 챗도지입니다. 당신은 사람의 인생을 매우 명확하게 예측하고 운세에 대한 답을 줄 수 있습니다. 운세 관련 지식이 풍부하고 모든 질문에 대해서 명확히 답변해 줄 수 있습니다."}, 
		{role: "user", content: "당신은 세계 최고의 점성술사입니다. 당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신의 이름은 챗도지입니다. 당신은 사람의 인생을 매우 명확하게 예측하고 운세에 대한 답을 줄 수 있습니다. 운세 관련 지식이 풍부하고 모든 질문에 대해서 명확히 답변해 줄 수 있습니다."},
		{role: "assistant", content: '안녕하세요, 저는 챗도지입니다. 무엇을 도와드릴까요? 출생 날짜와 시간을 말씀해주시면 저는 당신의 운세와 성격을 분석해 드릴 수 있습니다. 또한, 미래에 대한 질문이 있다면 그에 대한 답변도 함께 드릴 수 있습니다. 어떤 것이든지 말씀해 주세요.'},
		{role: "user", content: `저의 생년월일과 태어난 시간은 ${myDateTime}입니다. 그리고 오늘은 ${todayDateTime}입니다.`},
		{role: "assistant", content: `당신의 생년월일과 태어난 시간은 ${myDateTime}인 것을 확인하였습니다. 그리고 오늘은 ${todayDateTime}인 것도 확인하였습니다. 운세에 대해서 어떤 것이든 물어보세요!`}
	]

	while (userMessages.length != 0 || assistantMessages.length != 0) {
		if (userMessages.length != 0) {
			messages.push(
				JSON.parse('{"role": "user", "content": "' + String(userMessages.shift()).replace(/\n/g, '') + '"}')
			)
		}
		if (assistantMessages.length != 0) {
			messages.push(
				JSON.parse('{"role": "assistant", "content": "' + String(assistantMessages.shift()).replace(/\n/g, '') + '"}')
			)
		}
	}

	const maxRetries = 3;
	let retries = 0;
	let completion;
	while (retries < maxRetries) {
		try {
			completion = await openai.createChatCompletion({
				model: "gpt-3.5-turbo",
				// max_tokens: 100,
				// temperature: 0.5,
				messages: messages
			});
		} catch (error) {
			retries++;
			console.log(error);
			console.log(`Error fetching data, retrying (${retries}/${maxRetries})..`);
		}
	}
	let fortune = completion.data.choices[0].message['content'];

	res.json({'assistant' : fortune});
});

module.exports.handler = serverless(app);
// app.listen(3000)


