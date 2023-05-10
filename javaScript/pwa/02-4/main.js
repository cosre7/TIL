// ./library_named.js 파일에서 내보낸 식별자를 가져와 conHello, fnPlusNumbers 객체에 저장
import { conHello, fnPlusNumbers } from "./library_named.js";

// ./library_named.js 파일에서 내보낸 모든 식별자를 가져와 myLibrary 객체에 저장
import * as myLibrary from './library_named.js';

// 외부에서 기본 모듈로 내보낸 식별자 가져오기 (이름 변경 가능)
import fnMyFunction from './library_default.js';