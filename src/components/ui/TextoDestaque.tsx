interface TextoDestaqueProps {
    texto?: string;
}

function TextoDestaque({ texto }: TextoDestaqueProps) {
    return (
    <p className="bg-black px-8 py-2 rounded-full text-white text-center font-light w-fit">
        {texto}
    </p>
    );
}

export default TextoDestaque;