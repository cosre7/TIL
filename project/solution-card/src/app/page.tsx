'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { answers } from './answers';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');

  const handleBookClick = () => {
    if (isOpen) {
      // Close book
      setIsOpen(false);
      setTimeout(() => {
        setCurrentAnswer('');
      }, 1000); // Clear answer after close animation
    } else {
      // Open book
      const randomIndex = Math.floor(Math.random() * answers.length);
      setCurrentAnswer(answers[randomIndex]);
      setIsOpen(true);
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.backgroundGlow} />

      <div className={styles.heroSection} id="book">
        <header className={styles.header}>
          <h1 className={styles.title}>해결의 책</h1>
          <p className={styles.subtitle}>고민을 떠올리고 책을 펼쳐보세요</p>
        </header>

        <div className={styles.bookContainer} onClick={handleBookClick}>
          <div className={`${styles.book} ${isOpen ? styles.openbook : ''}`}>
            
            {/* The Page (Revealed when open) */}
            <div className={styles.rightPage}>
              <div className={styles.quoteDecoration} />
              <p className={styles.answer}>{currentAnswer}</p>
              <div className={styles.quoteDecoration} />
            </div>

            {/* The Cover (Rotates) */}
            <div className={`${styles.cover} ${isOpen ? styles.open : ''}`}>
              {/* Front Cover */}
              <div className={styles.coverFront}>
                <div className={styles.spine} />
                <div className={styles.logo}>?</div>
                <p className={styles.instruction}>Touch to Open</p>
              </div>
              
              {/* Inner Cover (Left page) */}
              <div className={styles.coverInner}>
              </div>
            </div>

          </div>
        </div>

        {isOpen && (
          <button 
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation();
              handleBookClick();
            }}
          >
            책 덮기
          </button>
        )}
      </div>

      {/* Ad Placeholder 1 */}
      <div className={styles.adContainer}>
        <p>Google AdSense Area (Display Ad)</p>
      </div>

      {/* Content Section 1: How to Use */}
      <section className={styles.textSection} id="guide">
        <h2>사용하는 방법</h2>
        <p>
          인생을 살다 보면 수많은 선택의 갈림길에 서게 됩니다. 
          "이 사람에게 고백해도 될까?", "이직을 하는 게 맞을까?", "지금 투자를 시작해야 할까?" 
          사소한 고민부터 인생을 바꿀 중요한 결정까지, 우리는 매 순간 망설입니다.
        </p>
        <p>
          <strong>해결의 책</strong>은 복잡한 마음을 정리하고 직관적인 영감을 얻을 수 있도록 도와주는 도구입니다. 
          사용 방법은 아주 간단합니다.
        </p>
        <ul>
          <li><strong>1단계:</strong> 마음속으로 구체적인 질문을 떠올리세요. (예: "지금 연락해도 될까요?")</li>
          <li><strong>2단계:</strong> 질문에 집중하며 눈앞에 있는 <strong>책의 표지</strong>를 터치하세요.</li>
          <li><strong>3단계:</strong> 책이 펼쳐지며 당신을 위한 해답이 나타납니다.</li>
        </ul>
        <p>
          나온 대답이 마음에 들지 않더라도 실망하지 마세요. 중요한 것은 그 대답을 마주했을 때 당신이 느낀 <strong>첫 번째 감정</strong>입니다. 
          그 감정이 바로 당신의 무의식이 보내는 진짜 정답일지도 모릅니다.
        </p>
      </section>

      {/* Ad Placeholder 2 */}
      <div className={styles.adContainer}>
        <p>Google AdSense Area (In-feed Ad)</p>
      </div>

      {/* Content Section 2: About / Psychology */}
      <section className={styles.textSection} id="about">
        <h2>해결의 책의 원리</h2>
        <p>
          우연처럼 보이는 이 해답들에는 사실 심리학적인 원리가 숨어 있습니다. 
          이를 <strong>'투사(Projection)'</strong>와 <strong>'확증 편향(Confirmation Bias)'</strong>으로 설명할 수 있습니다.
        </p>
        <p>
          우리는 이미 마음속 깊은 곳에 답을 가지고 있는 경우가 많습니다. 
          다만 불안함 때문에 확신을 갖지 못할 뿐이죠. 
          해결의 책이 던지는 모호하거나 긍정적인 메시지는 당신의 무의식을 자극하여, 
          스스로가 진정으로 원하던 방향을 깨닫게 해주는 <strong>거울</strong> 역할을 합니다.
        </p>
        <p>
          "확실해요"라는 답을 보았을 때 안도감을 느꼈다면, 당신은 이미 그 일을 하고 싶었던 것입니다. 
          반대로 망설여진다면, 아직 준비가 덜 되었다는 신호일 수 있습니다. 
          결국 모든 해답은 책이 아닌, 당신의 마음속에 있습니다.
        </p>
      </section>

      {/* Content Section 3: FAQ */}
      <section className={styles.textSection} id="faq">
        <h2>자주 묻는 질문 (FAQ)</h2>
        
        <div className={styles.faqItem}>
          <h3>Q. 같은 질문을 여러 번 해도 되나요?</h3>
          <p>
            A. 권장하지 않습니다. 처음 나온 대답이 당신의 현재 에너지를 가장 잘 반영합니다. 
            다만, 상황이 바뀌었거나 며칠이 지난 후에 다시 물어보는 것은 괜찮습니다.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Q. 정말로 미래를 예언하나요?</h3>
          <p>
            A. 이 서비스는 과학적인 예언 도구가 아닙니다. 
            타로 카드나 운세처럼, 당신의 생각을 정리하고 새로운 관점을 제공하는 <strong>상담 도구</strong>로 가볍게 즐겨주세요. 
            중요한 결정은 반드시 현실적인 상황을 고려하여 본인의 의지로 내려야 합니다.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>Q. 무료인가요?</h3>
          <p>
            A. 네, 해결의 책 온라인 버전은 100% 무료로 제공됩니다. 
            언제든지 마음이 답답할 때 찾아와서 지혜를 빌려 가세요.
          </p>
        </div>
      </section>
    </main>
  );
}
