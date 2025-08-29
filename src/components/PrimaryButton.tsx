
export default function PrimaryButton({ className } : { className?: string }) {

    const signupUrl = import.meta.env.PUBLIC_LOGIN_LINK;

    return (
        <a
            href={signupUrl}
            className={
            `px-6 py-3 rounded-full text-white bg-gradient-to-b from-gray-950 from-[40%] to-[#6d7a97] 
         hover:from-[#6d7a97] hover:from-[5%] hover:to-gray-950 text-md font-medium cursor-pointer ` + className
        }>
            Start for Free
        </a>
    );
}