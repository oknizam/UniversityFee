import React, { useEffect } from "react";

const SelectInput = ({ options = [], title = "", name = "", value = "", replaceFlag = false, onChange }) => {

    return (
        <div className="sel-container">
            <h3>{title}:</h3>
            {!replaceFlag ? <select name={name} onChange={onChange} value={value}>
                <option value="">{title}</option>
                {options.length > 0 && options.map((ele) =>

                    <option key={ele} value={ele}>{ele}</option>

                )}
            </select> :
                <>
                    {options.map((ele) => (
                        <button key={ele} onClick={() => onChange(name, ele)}>
                            {ele.replace('ALL_COURSES', 'Medical, Dental, Ayurveda')}
                        </button>
                    ))}
                </>

            }
        </div>
    )

};



export default SelectInput; 
