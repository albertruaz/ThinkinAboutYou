// BlueScreen.tsx
import { Component } from "solid-js";

const BlueScreen: Component = () => {
  // 버튼처럼 보이는 텍스트에 대한 이벤트 핸들러
  const handleEnterKey = () => {
    console.log("Enter key pressed");
  };

  const handleCtrlAltDel = () => {
    console.log("Ctrl+Alt+Del pressed");
  };

  return (
    <div
      class="w-full h-screen flex flex-col justify-center items-center bg-[#0000AA] text-[#FFFFFF] font-mono"
      style="line-height: 1.6; letter-spacing: 0.05em; font-size: 1.1rem;"
    >
      <div class="max-w-md text-center space-y-3 px-4">
        {/* "Windows" 타이틀 부분 */}
        <div
          class="bg-white text-[#0000AA] font-bold py-1 px-3 mb-4 inline-block"
          style="font-size: 1rem;"
        >
          Windows
        </div>
        <p>오류가 발생했습니다. 계속하려면 다음 중 하나를 수행하십시오.</p>
        <p>
          <span class="cursor-pointer underline" onClick={handleEnterKey}>
            Windows로 돌아가려면 <span class="font-bold">Enter</span> 키를
            누르십시오.
          </span>
        </p>
        <p>
          <span class="cursor-pointer underline" onClick={handleCtrlAltDel}>
            시스템을 다시 시작하려면 <span class="font-bold">Ctrl+Alt+Del</span>{" "}
            키를 누르십시오.
          </span>{" "}
          이렇게 하면 실행 중인 응용 프로그램의 저장하지 않은 정보는 손실됩니다.
        </p>
        <p>오류: 0E : 832F : 00004B72</p>
        <p>계속하려면 아무 키나 누르십시오.</p>
      </div>
    </div>
  );
};

export default BlueScreen;
