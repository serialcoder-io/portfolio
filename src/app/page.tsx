import Image from "next/image";

export const metadata = {
  title: "Home | Omar Anli",
  description: "Welcome to Omar Anli’s portfolio, a backend and full-stack developer.",
};



export default function Home() {
  return (
    <div className="text-white p-8">
      Tailwind is working!
      <button className="btn btn-primary text-white">hello</button>
    </div>
  );
}
