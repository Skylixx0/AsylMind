import React from 'react'
import { useTranslation } from 'react-i18next';

const languages = [
    {code: "en", lang: "English"},
    {code: "kk", lang: "Қазақ"},
    {code: "ru", lang: "Русский"},
]


const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const switchLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className='container flex gap-3'>
            {
                languages.map((lang)=>(
                    <button className='font-bold cursor-pointer' key={lang.code} onClick={()=>switchLanguage(lang.code)}>
                        {lang.lang}
                    </button>
                ))
            }
        </div>
    )
}

export default LanguageSelector;