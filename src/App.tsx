import "./App.css";
import Image from "./components/Image";
import QRDescription from "./components/QRDescription";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen font-outfit">
        <div className="bg-white rounded-lg shadow-lg p-4 pb-10 flex flex-col items-center w-[320px] max-w-full gap-6">
          <Image url="/image-qr-code.png" alt="QR image" />
          <QRDescription />
        </div>
      </div>
    </>
  );
}

export default App;
