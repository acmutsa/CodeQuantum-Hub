
import { calSans, poppins } from "@/src/lib/fonts";

export default function CodeQuantum(){
    return (

        <div className=" flex flex-col gap-[cqw] mx-auto overflow-y-auto h-screen">
            <div className="text-center text-[2rem] md:text-[3rem] font-bold px-8 py-4"> CODEQUANTUM </div>
            <main className="text-[1-rem] px-8">
                <p className={`${poppins.className} font-regular pb-5`}>
                    CodeQuantum is a 12-hour, student-run hackathon hosted by the Association for Computing Machinery (ACM) at UTSA, with a history of working alongside ACM-W. CodeQuantum is an all inclusive event that aims to empower students from marginalized communities in tech, bring students together, and create a space where everyone can learn, build, and collaborate.
                </p>
                <p className={`${poppins.className} font-regular pb-5`}>
                    CodeQuantum is entirely beginner-friendly, and you don’t need to be an expert to participate. Come learn something new and build something you’re excited about. Throughout the event, you’ll have opportunities to learn from others, get help when you need it, and connect with fellow students who share your interests. Our goal is to create a welcoming environment where everyone can feel comfortable getting involved, regardless of their experience level.
                </p>
            </main>
        </div>
    );
}