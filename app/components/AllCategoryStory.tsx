export default function AllCategoryStory() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* Health Section */}
            <section className="mb-8">
                <h2 className="text-xl font-bold text-red-600 mb-4">स्वास्थ्य</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Featured Article */}
                    <div className="md:w-2/3 bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold">
                            भारत-पाकिस्तान के बीच सीजफायर, बच्चों के मन से युद्ध का भय कैसे निकाले, एक्सपर्ट से जानें
                        </h3>
                        <img
                            src={`https://picsum.photos/id/${340}/200/300`}
                            alt="Featured Health Story"
                            className="mt-4 w-full rounded-lg"
                        />
                    </div>
                    {/* Related Articles */}
                    <div className="md:w-1/3 space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={`https://picsum.photos/id/${345}/200/300`}

                                alt="Related Health Story"
                                className="w-full rounded-lg"
                            />
                            <h4 className="text-md font-semibold mt-2">
                                भारत-पाकिस्तान के मध्य कैसे निकालें व्यथा? जानिए - युद्ध के बाद नियम जो हॉस्पिटल्स को रखते हैं सेफ
                            </h4>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h4 className="text-md font-semibold">
                                दवा, सुविधा और सम्मान चाहिए... वर्ल्ड थैलेसीमिया डे पर मरीजों ने सरकार से की ये मांगें
                            </h4>
                        </div>
                    </div>
                </div>
                <a href="#" className="text-red-600 font-semibold mt-2 inline-block">और भी ►</a>
            </section>

            {/* Thoughts & Analysis Section */}
            <section>
                <h2 className="text-xl font-bold text-red-600 mb-4">विचार एवं विश्लेषण</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Featured Article */}
                    <div className="md:w-2/3 bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold">
                            पाकिस्तान को उसकी ही हथियारबंदी स्वीकार करने भारत की दोहरी जीत
                        </h3>
                        <img
                            src={`https://picsum.photos/id/${350}/200/300`}

                            alt="Featured Analysis Story"
                            className="mt-4 w-full rounded-lg"
                        />
                    </div>
                    {/* Related Articles */}
                    <div className="md:w-1/3 space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={`https://picsum.photos/id/${360}/200/300`}

                                alt="Related Analysis Story"
                                className="w-full rounded-lg"
                            />
                            <h4 className="text-md font-semibold mt-2">
                                नवाज शरीफ को मिले कारगिल युद्ध के सबक का भारी शहबाज शरीफ को फायदा मिल पाएगा?
                            </h4>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={`https://picsum.photos/id/${370}/200/300`}

                                alt="Related Analysis Story"
                                className="w-full rounded-lg"
                            />
                            <h4 className="text-md font-semibold mt-2">
                                पाकिस्तान बन चुका है हमास, उसे निपटने के लिए भारत को क्यों इजरायल बनना ही होगा?
                            </h4>
                        </div>
                    </div>
                </div>
                <a href="#" className="text-red-600 font-semibold mt-2 inline-block">और भी ►</a>
            </section>
        </div>
    );
}