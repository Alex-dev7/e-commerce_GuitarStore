import QuestionsAcordion from "./QuestionsAcordion";

function FAQ() {
    return (
        <section className="my-12 mx-auto h-fit min-h-[500px] w-[95%] lg:w-[80dvw] max-w-[1300px] px-8 py-8 rounded-2xl bg-white shadow-2xl flex flex-col lg:flex-row place-items-center gap-8 lg:gap-none">
            <div className="w-full lg:w-[50%] h-[80%] flex flex-col place-items-start place-content-center  gap-8">
                <div className="space-y-4">
                    <h3 className="text-4xl font-bold">
                        FAQ
                    </h3>
                    <p className="font-light">Check out the most common questions our customers asked.</p>                    
                </div>
                <div>
                    <p className="font-light">
                        Can't find the answer here? Contact our customer support: 
                    </p>
                    <p className="font-bold">
                        Monday to Friday: 8am - 5pm
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-[50%] h-full flex place-items-center place-content-center">
                <QuestionsAcordion />
            </div>
        </section>
    );
}

export default FAQ;
