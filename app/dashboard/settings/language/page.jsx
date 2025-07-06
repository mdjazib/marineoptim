"use client"
import { ArrowLeft, Check } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const languages = [
    "English", "Urdu", "Arabic", "French", "German", "Spanish", "Chinese", "Japanese", "Hindi",
    "Russian", "Korean", "Portuguese", "Turkish", "Italian", "Persian", "Dutch", "Swedish",
    "Polish", "Greek", "Hebrew", "Thai", "Vietnamese", "Indonesian", "Malay", "Bengali",
    "Punjabi", "Tamil", "Telugu", "Gujarati", "Romanian", "Hungarian", "Czech", "Finnish",
    "Slovak", "Ukrainian", "Danish", "Norwegian", "Swahili", "Filipino", "Sinhala"
]

const Page = () => {
    const router = useRouter();
    const [lang, setLang] = useState("English")

    return (
        <div className='create'>
            <h2 className='crumb' onClick={() => { router.push("/dashboard/settings/") }}><ArrowLeft /><span>Language</span></h2>
            <form action="">
                {languages.map((l, index) => (
                    <div
                        className="lang"
                        key={index}
                        onClick={() => setLang(l)}
                    >
                        {lang.toLowerCase() === l.toLowerCase() ? (
                            <Check size={18} />
                        ) : (
                            <span style={{ width: 18 }}></span>
                        )}
                        <h4>{l}</h4>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default Page
