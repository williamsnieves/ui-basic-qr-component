import "./App.css";
import Image from "./components/Image";
import QRDescription from "./components/QRDescription";

function App() {
  return (
    <main className="flex justify-center items-center h-screen font-outfit bg-slate-300">
      <div className="bg-white rounded-lg shadow-lg p-4 pb-10 flex flex-col items-center w-[320px] max-w-full gap-6 max-h-[499px]">
        <Image
          url={`${import.meta.env.BASE_URL}image-qr-code.png`}
          alt="QR image"
        />
        <main>
          <QRDescription />
        </main>
      </div>
    </main>
  );
}

export default App;
