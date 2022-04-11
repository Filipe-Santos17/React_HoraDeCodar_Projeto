import {MessageSection} from "./message.element"
import {useState, useEffect} from "react"

export default function message({msg,type}) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        }
        
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false);
        },3000)
        return () => clearTimeout(timer)
    },[msg])

    return (
        <>
            {visible && (
                <MessageSection >
                    <div className={`${type}`}>
                        <div className={`message`}>
                            {msg}
                        </div>
                    </div>
                </MessageSection>
            )}
        </>
    )
}
