import React, { useEffect, useState } from "react";
import SelectInput from "../components/selectInput";

import Data from "../Data/sample.json";


const Home = () => {

    const [formData, setFormData] = useState({
        feeType: "",
        nationality: "",
        course: "",
        level: ""
    });

    const [totalFee, setTotalFee] = useState(0);


    const onChange = (e) => {
        const { name, value } = e.target;
        if (name == 'feeType') {
            setFormData({
                feeType: value,
                nationality: "",
                course: "",
                level: ""
            })
        }
        else if (name == 'nationality') {
            setFormData({
                ...formData,
                nationality: value,
                course: "",
                level: ""
            })
        }

        setTotalFee(0);

    }

    const handleSubstituteChange=(name,value)=>{
        if (name == 'course') {
            setFormData({
                ...formData,
                course: value,
                level: ""
            });
            setTotalFee(0);
        }
        else {
            setFormData({
                ...formData,
                level: value
            })
        }
    }

    useEffect(() => {
        console.log("level ", formData.level)
        if (formData.level && formData.course && formData.feeType && formData.nationality) {
            const feeAmount = Data[formData.feeType][formData.nationality][formData.course][formData.level].amount;
            setTotalFee(feeAmount);
        }

    }, [formData.level])



    return (
        <div className="container">
            <h2>University Fee Portal</h2>
            <SelectInput options={Object.keys(Data)} name={'feeType'} title={"Select Fee Type"} onChange={onChange} value={formData.feeType} />

            {formData.feeType && <SelectInput options={Object.keys(Data[formData.feeType])} name={'nationality'} title={"Select Nationality"} onChange={onChange} value={formData.nationality} />}


            {formData.nationality && <SelectInput replaceFlag={true} options={Object.keys(Data[formData.feeType][formData.nationality])} name={'course'} title={"Select Course"} onChange={handleSubstituteChange} />}

            {formData.course != "" && <SelectInput replaceFlag={true} options={Object.keys(Data[formData.feeType][formData.nationality][formData.course])} name={'level'} title={"Select Level"} onChange={handleSubstituteChange} />}

            {totalFee > 0 && <h4 className="mt-15">
                Fee amount: {totalFee}
            </h4>}

        </div>
    )
};


export default Home;

