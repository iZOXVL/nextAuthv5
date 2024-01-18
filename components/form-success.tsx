import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSucccessProps{
    message?: string;

};

export const FormSuccess = ({
    message,
}: FormSucccessProps) => {
    if (!message) return null;
    return(
        <div className="bg-emerald-500/15 p-3 rounded-md flex item-center gap-x-2 text-sm text-emerald-700">
            <CheckCircledIcon className="h-5 w-4"/>
            <p>{message}</p>
        </div>
    );
};