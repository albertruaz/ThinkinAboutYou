// BlueScreen.tsx
import { Component } from "solid-js";
// import "/src/index.css"; // Tailwind CSS를 적용한 파일

const BlueScreen: Component = () => {
  return (
    <div class="w-full h-screen bg-blue-900 flex flex-col justify-center items-center text-white text-lg font-mono">
      <div class="max-w-md text-center space-y-4 px-4">
        <h1 class="text-3xl font-bold">Windows</h1>
        <p>오류가 발생했습니다. 계속하려면 다음 중 하나를 수행하십시오.</p>
        <p>
          Windows로 돌아가려면 <span class="font-bold">Enter</span> 키를
          누르십시오.
        </p>
        <p>
          시스템을 다시 시작하려면 <span class="font-bold">Ctrl+Alt+Del</span>{" "}
          키를 누르십시오. 이렇게 하면 실행 중인 응용 프로그램의 저장하지 않은
          정보는 손실됩니다.
        </p>
        <p>오류: 0E : 832F : 00004B72</p>
        <p>계속하려면 아무 키나 누르십시오.</p>
      </div>
    </div>
  );
};

export default BlueScreen;
