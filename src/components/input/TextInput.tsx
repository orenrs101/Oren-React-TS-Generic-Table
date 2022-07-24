import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import useDebounce from "../../custom-hooks/useDebounce";
import './TextInput.scss';
import { debounce } from "../../utilities/debouce";

const TextInput:React.FC<ITextInputProps> = ({ onChange }:ITextInputProps) => {

////////////////////////////////////////////=Using debouce custom hook=/////////////////////////////////////////////////
/** React dev-mode renders the component twice on first mount, therefore decided to comment-out and use debouce utility.**/
/*
    const firstRender = useRef<boolean>(true);
    const [searchInput, setSearchInput] = useState<string>('');
    const debouncedSearchInput = useDebounce(searchInput, 200);

    useEffect(() => {
        if(firstRender.current !== true) { //Don't call on first render
            onChange(debouncedSearchInput);
        }
        firstRender.current = false;

    },[debouncedSearchInput]);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const searchBoxDebounce: (value:string) => void = debounce((input:string) => {
        onChange(input.trim());
    },200);

    return (
        <input
            type="text"
            className="text-input"
            onClick={(e:React.MouseEvent<HTMLElement>) => {e.stopPropagation()}}
            onChange={(e:ChangeEvent<HTMLInputElement>) => {searchBoxDebounce(e.target.value)}} //Debounce Utility
            // onChange={(e:ChangeEvent<HTMLInputElement>) => {setSearchInput(e.target.value)}} //useDebounce Hook
        />
    );
};

export default TextInput;

export interface ITextInputProps {
    onChange: (textInput:string) => void
}