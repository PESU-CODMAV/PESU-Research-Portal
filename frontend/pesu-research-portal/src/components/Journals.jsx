import Navbar from "./Navbar";
import React, { useEffect } from 'react';

const Journals = () => {
    useEffect(() => {
        const questions = document.querySelectorAll('[data-question]');
        const answers = document.querySelectorAll('[data-answer-content]');
        if (questions.length === 0 || answers.length === 0) {
            console.error('Questions or answers not found');
            return;
        }    

        // Function to toggle visibility of the answer
        const toggleAnswer = (event) => {
            // Hide all answers first
            answers.forEach(answer => {
                answer.classList.add('hidden');
            });

            questions.forEach(question => {
                question.classList.remove('text-blue-600');
            });
            // Show the clicked answer
            const answerId = event.currentTarget.getAttribute('data-answer');
            const answer = document.getElementById(answerId);
            
            if (answer) {
                answer.classList.remove('hidden');
                
                }
                event.currentTarget.classList.add('text-blue-600');
            
            // Add the class to the clicked question
        
        };

        // Add event listeners to each question
        questions.forEach(question => {
            question.addEventListener('click', toggleAnswer);   
        });

        // Cleanup function to remove event listeners
        return () => {
            questions.forEach(question => {
                question.removeEventListener('click', toggleAnswer);
            });
        };
    }, []); // Empty dependency array ensures this effect runs once

    return ( 
        <div>
            <div>
                <Navbar/>
            </div>

            <div className="grid grid-cols-5 gap-2 overflow-y-auto" style={{
                    backgroundImage: "url(/img/pixelcut-export.jpg)",
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover', // Ensures the image covers the entire div
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw', // Full viewport width
                    height: '100vh', // Full viewport height
                    //overflow: 'hidden' // Hide any overflow
                }}>
                <div className="col-span-1 p-10  bg-white h-full justify-evenly text-center bg-opacity-80" >
                    <ul className="font-serif text-xl leading-10 cursor-pointer p-15">
                    <li className="hover:text-blue-600" data-question='q1' data-answer="a1">Levels of Journals</li>
                    <li className="hover:text-blue-600" data-question='q2' data-answer="a2">Journal Paper Format</li>
                    <li className="hover:text-blue-600" data-question='q3' data-answer="a3">Incentives</li>
                    </ul>
                </div>
            
            <div className="col-span-4 col-start-2 row-start-1 p-5 hidden font-serif bg-white opacity-90 rounded-lg mr-10" id="a1" data-answer-content>
                    
                
            <h2 className="text-center text-3xl m-2"> LEVELS OF JOURNALS </h2>

                
                <p className="text-center text-2xl m-2 p-4 text-gray-800">Scientific journals are classified and ranked, and these classifications and rankings are key for authors, publishers and journal editors. The ranking of journals is common in academia and journal rankings count when a researcher is putting forward their file for retention, tenure and promotion. Researchers aim to publish in top-tier and high-ranking journals. So it is important for them to know how a journal is classified and ranked.</p>
                <div className="p-3 text-center text-2xl hover: underline text-blue-500">
                <a href="https://www.scimagojr.com/">Click Here to know about Standard Journal Rankings</a>
                </div> <br />
                <p> <h3 className="p-3 text-center text-black text-2xl">Q1 JOURNALS</h3>
                    <div className="text-center text-xl text-gray-700 leading-8">
                    - Q1 journals are in the top 25% of journals in a particular field.They typically have the highest impact factors in their field.<br />
                    - The peer-review process is usually very rigorous and thorough.<br />
                    - Acceptance rates are low, meaning these journals are highly selective about the papers they publish. <br />
                    -Articles in Q1 journals receive high visibility and are frequently cited.
                    <br /> <br />
                
                <h3 className="text-black p-3 text-2xl"> Q2 JOURNALS</h3>
                    - Q2 journals fall within the 25% to 50% range in their field. They have a respectable impact factor, though not as high as Q1 journals. <br />
                    - The peer-review process is quite rigorous.<br />
                    - These journals are moderately selective <br /> 
                    -  Articles in Q2 journals have good visibility and are frequently cited.<br /> 
                    <br />
            
                <h3 className="text-black p-3 text-2xl">Q3 JOURNALS</h3>
                    - Q3 journals are in the 50% to 75% range in their field.<br />
                    - Less stringent review process. <br />
                    - The acceptance rates are generally higher, making them less selective than Q1 and Q2 journals. <br />
                    - Articles in Q3 journals have moderate visibility and are cited less frequently. <br /> <br />
                    </div>
                </p>
            
            </div>

            <div className="col-span-4 col-start-2 row-start-1 p-5 hidden font-serif bg-white opacity-90 rounded-lg mr-10" id="a2" data-answer-content>
            <h2 className="text-center text-3xl m-2"> RESEARCH PAPER FOR JOURNALS </h2>
                <p className="text-xl text-center m-4">Journal papers are scholarly articles published in academic journals, and undergo a rigorous peer-review process to ensure the quality, validity, and significance of the research. They contribute to the existing body of knowledge by presenting new theories, methodologies, empirical studies, or literature reviews.</p>
                <h3 className="text-center text-3xl text-gray-700">How to structure a journal paper:</h3>
                <p className="text-center text-xl m-2"> Most academic journals conventionally accept original research articles in the following format: Abstract, followed by the Introduction, Methods, Results, and Discussion sections, also known as the IMRaD, which is a brilliant way of structuring a research paper outline in a simplified and layered format.</p> <br />
                <h3 className="text-center text-3xl m-1 text-gray-700">Abstract</h3> <br />
                <p className="text-xl text-center">All information provided in the abstract must be present in the manuscript, it should include a stand-alone summary of the research, the main findings, the abbreviations should be defined separately in this section, and this section should be clear, decluttered, and concise. </p> <br />
                <h3 className="text-center text-3xl m-2 text-gray-700">Introduction</h3> <br />
                <p className=" text-xl text-center">This section should begin with a background of the study topic, i.e., what is already known, moving on to the knowledge gaps that exist, and finally, end with how the present study aims to fill these gaps, or any hypotheses that the authors may have proposed.</p> <br />
                <h3 className="text-center text-3xl m-2 text-gray-700">Methods</h3><br />
                <p className=" text-xl text-center">The ultimate factor to consider while producing the methods section is reproducibility; this section should be detailed enough for other researchers to reproduce your study and validate your results. It should include ethical information (ethical board approval, informed consent, etc.) and must be written in the past tense. </p> <br />
                <h3 className="text-center text-3xl m-2 text-gray-700">Results</h3> <br />
                <p className="text-xl text-center">This section typically presents the findings of the study, with no explanations or interpretations. Here, the findings are simply stated alongside figures or tables mentioned in the text in the correct sequential order. Because you are describing what you found, this section is also written in the past tense. </p> <br />
                <h3 className="text-center text-3xl m-2 text-gray-700">Discussion and conclusion
                </h3> <br />
                <p className="text-xl text-center">This section begins with a summary of your findings and is meant for you to interpret your results, compare them with previously published papers, and elaborate on whether your findings are comparable or contradictory to previous literature. <br />
                This section also contains the strengths and limitations of your study, and the latter can be used to suggest future research. End this section with a conclusion paragraph, briefly summarizing and highlighting the main findings and novelty of your study.</p> <br />
                <h3 className="text-center text-3xl m-2 text-gray-700">Citing References</h3> <br />
                <p className="text-xl text-center">Most sections of your paper majorly rely on external sources of information that have already been published. Therefore, it is absolutely indispensable to extract and cite these statements from appropriate, credible, recent, and relevant literature to support your claims. </p>
            </div>


            <div className="col-span-4 col-start-2 row-start-1 p-5 hidden font-serif bg-white opacity-90 rounded-lg mr-10" id="a3" data-answer-content>
            <h2 className="text-center text-3xl m-2"> INCENTIVES </h2>  <br /> <br />
            <div className="text-center">
                        <h3 className="text-center text-3xl m-2 text-gray-700">Name of Journal</h3>
                        <input
                            type="text"
                            className="border border-gray-300 p-2 rounded w-full mb-4"
                            placeholder="Enter journal names"
                        />
                        <h3 className="text-center text-3xl m-2 text-gray-700">Journal Indexing</h3>
                        <input
                            type="text"
                            className="border border-gray-300 p-2 rounded w-full mb-4"
                            placeholder="Enter indexing"
                        />
                        <h3 className="text-center text-3xl m-2 text-gray-700"> Digital Object Identifier (DOI)</h3>
                        <input
                            type="text"
                            className="border border-gray-300 p-2 rounded w-full mb-4"
                            placeholder="Enter DOI"
                        />
                        <label htmlFor="fileUpload" className="block text-center text-3xl m-2 text-gray-700">Upload Journal Paper</label>
                        <input type="file" id="fileUpload" name="fileUpload" className="w-full p-2 border border-gray-300 rounded"/>
                    
            </div>
            </div>

        
        </div>
        </div>
    );
}

export default Journals;
