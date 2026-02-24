"use client";

import DynamicForm, { Field } from "../forms/DynamicForm";
import SlidingPanel from "./SlidingPanel";



interface CountryPreferencePanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CountryPreferencePanel({ isOpen, onClose }: CountryPreferencePanelProps) {
    // Define the form fields for country selection. In a real application, you might want to fetch this list from an API or a constants file.
    const fields: Field[] = [
        {
            id: "country",
            name: "country",
            type: "select",
            placeholder: "Select your country",
            options: ["uk", "us", "ca", "au"],
        },
    ];

    // Handle form submission
    const handleSubmit = (value: Record<string, string>) => {
        console.log("Selected country:", value.country);
        onClose();
    }

    return (
        <SlidingPanel isOpen={isOpen} onClose={onClose} direction="right" size="full" >
            <div className="p-4">
                <h2>Country Preference</h2>
                <DynamicForm fields={fields} onSubmit={handleSubmit}
                buttonLabel="SAVE AND CONTINUE" />
            </div>

        </SlidingPanel>
    )
}





































// import SelectField from "../forms/TitleSelect";
// import SlidingPanel from "./SlidingPanel";
// import Button from "../ui/Button";

// interface CountryPreferencePanelProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// export default function CountryPreferencePanel({ isOpen, onClose }: CountryPreferencePanelProps) {
    
//     return (
//         <SlidingPanel isOpen={isOpen} onClose={onClose} direction="right" size="full">
            
//             <div className="p-4">
//                 <h2 className="text-2xl font-bold mb-4">Country Preferences</h2>
//                 <SelectField field={{
//                     id: "country",
//                     name: "country",
//                     placeholder: "Select your country",
//                     options: ["uk", "us", "ca", "au"]
//                 }} options={[
//                     { value: "uk", label: "United Kingdom" }, 
//                     { value: "us", label: "United States" },
//                     { value: "ca", label: "Canada" }, 
//                     { value: "au", label: "Australia"}
//                 ]} />
//                 <Button buttonLabel="SAVE AND CONTINUE" />
//             </div>
//         </SlidingPanel>
//     )
// }