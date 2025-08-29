
export default function SecondaryButton(){

    const signupUrl = import.meta.env.PUBLIC_LOGIN_LINK;

    return (
        <a
            href={signupUrl}
            className="px-6 py-3  rounded-full bg-white hover:bg-gray-50">
            Contact Sales
        </a>
    );
}