import cross from '../assets/icons/cross.svg';
import { useState } from 'react';
import { motion } from 'motion/react';

const questions = [
    { question: 'How do I get started with Custo?', answer: 'Simply sign up, choose a plan, and start organizing your CRM in minutes, no setup required.' },
    { question: 'Is there a free trial available before subscribing?', answer: 'Yes, Custo offers a free trial so you can explore all core features, test workflows, and decide if it fits your business, no credit card required.' },
    { question: 'Can I manage multiple pipelines at once?', answer: 'Yes, Custo allows you to create and manage multiple custom pipelines and control over every stage of your sales process.' },
    { question: 'What types of businesses can use Custo?', answer: 'Custo is flexible and scalable, making it ideal for startups, agencies, small businesses, and teams that need a streamlined way to manage customer data.' },
    { question: 'How secure is my data with Custo?', answer: 'Custo employs advanced security measures, including encryption and regular backups, to ensure your data is safe and protected.' },
    { question: 'Can I integrate Custo with other tools?', answer: 'Yes, Custo offers integrations with popular tools like email platforms, marketing software, and more to streamline your workflow.' },
    { question: 'Can I import data from spreadsheets or another CRM?0', answer: 'Yes, importing is easy with our guided import tool, which supports CSV files and structured data from most CRM platforms with just a few simple steps.' },
    { question: 'How does Custo handle data backups?', answer: 'We run automated backups on a regular schedule, storing data securely in the cloud to ensure your information stays protected and always recoverable.' },
    { question: 'Will I lose data if I downgrade my plan?', answer: 'No worries, your data stays intact. Some features may be limited, but you’ll never lose important info when changing or downgrading your plan.' },
    { question: 'How often is Custo updated with new features?', answer: 'Custo receives regular updates with new features, performance improvements, and security patches to ensure your CRM stays fast, secure, and reliable.' }
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeInOut' }
    }
};

export default function FaqSection() {
    const [openArray, setOpenArray] = useState<number[]>(new Array(questions.length).fill(0));

    return (
        <section className="py-28">
            <div className="px-10">
                <div className="container-large flex flex-col gap-16">
                    <motion.div
                        className="flex flex-col gap-4 text-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="font-medium text-5xl will-change-transform"
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 will-change-transform"
                        >
                            Find quick answers to common questions about Custo.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10">
                        {questions.map(({ question, answer }, index) => {
                            const isOpen = openArray[index] === 1;
                            return (
                                <div
                                    key={index}
                                    className="relative w-full py-5 flex flex-col justify-start gap-3 cursor-pointer select-none"
                                    onClick={() =>
                                        setOpenArray(openArray.map((v, i) => (i === index ? (v === 1 ? 0 : 1) : 0)))
                                    }
                                >
                                    <div className="pointer-events-none absolute left-0 bottom-0 h-px w-full bg-gray-200" />
                                    <motion.div
                                        className="pointer-events-none absolute left-0 bottom-0 h-px bg-[#00ad75]"
                                        initial={false}
                                        animate={
                                            isOpen
                                                ? { scaleX: 1, transition: { duration: 0.25, ease: 'easeOut' } }
                                                : { scaleX: 0, transition: { duration: 0 } }
                                        }
                                        style={{ transformOrigin: 'left', width: '100%' }}
                                    />
                                    <div className="flex justify-start items-center gap-3">
                                        <img
                                            src={cross.src}
                                            alt="Toggle"
                                            width="20"
                                            className={isOpen ? 'rotate-45 transition-transform' : 'transition-transform'}
                                        />
                                        <div className="font-medium text-xl">{question}</div>
                                    </div>
                                    {isOpen && (
                                        <p className="text-lg text-gray-600 pl-8">
                                            {answer}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}