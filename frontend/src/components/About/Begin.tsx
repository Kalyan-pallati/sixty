import picture from "../../assets/3 members.jpeg"
export default function Begin() {
    return (
            <div className="py-10">
                <h1 className="bg-red-700 text-center text-5xl font-pixel tracking-wider p-4 shadow-[0_6px_15px_rgba(0,0,0,0.6)]">How it all began</h1>
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row justify-around py-10 items-center">
                        <div className="overflow-hidden rounded-lg items-center pb-5 md:pb-0">
                        <img src={picture} alt="" className="w-48 md:w-64 h-auto border border-black hover:scale-110 transition-transform duration-700 ease-out" />
                        </div>
                        <p className="w-96 text-red-700 text-center text-2xl font-pixel">Three friends, one half-serious idea, and a lot of late-night conversations. What started as random discussions about building something meaningful slowly turned into an actual plan. None of us had everything figured out, but the curiosity to try was stronger than the fear of failing. Those early days were messy, experimental, and honestly a little chaotic, but that’s where the foundation of everything we’re building today began.</p>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse justify-around bg-red-700 py-10 items-center shadow-[0_6px_15px_rgba(0,0,0,0.6)]">
                        <div className="overflow-hidden rounded-lg">
                            <img src={picture} alt="" className="w-48 md:w-64 h-auto border border-black hover:scale-110 transition-transform duration-700 ease-out" />
                        </div>
                        <p className="w-96 text-center text-2xl font-pixel">As the idea started taking shape, we spent countless hours learning, testing, and rebuilding things that broke more times than we can count. There were moments where progress felt painfully slow, but every small improvement pushed us forward. Those struggles taught us patience, teamwork, and how powerful simple persistence can be when everyone is moving toward the same goal.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around py-10 items-center">
                        <div className="overflow-hidden rounded-lg">
                            <img src={picture} alt="" className="w-48 md:w-64 h-auto border border-black hover:scale-110 transition-transform duration-700 ease-out" />
                        </div>
                        <p className="w-96 text-red-700 text-center text-2xl font-pixel">What began as a small experiment slowly grew into something we genuinely believe in. The journey is still far from finished, but every step we’ve taken so far reminds us why we started in the first place. This project is more than just an idea now. It’s the result of shared effort, countless lessons, and the determination to keep building something better every single day.</p>
                    </div>
                </div>
            </div>
    )
}