// Shared button styles


type ButtonProps = {
    buttonLabel: string;
    type?: "button" | "submit" | "reset";
}
export default function Button({buttonLabel, type = "button"}: ButtonProps) {
    return (
      <button
        type="submit"
        className="uppercase w-full bg-black text-white text-sm font-bold tracking-widest p-4 transition-colors"
      >
        {buttonLabel}
      </button>
    );
}