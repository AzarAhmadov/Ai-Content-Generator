import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const OutputArea = () => {

    const editorRef = useRef<any>(null)

    return (
        <div>
            <div className='bg-white flex items-center rounded-t-md justify-between border py-4 px-4 border-b-0  -mb-1'>
                <h4 className='font-medium text-[19px]'>
                    Result
                </h4>
                <Button className='bg-slate-700 text-white flex gap-2 h-[40px]'>
                    <Copy /> Copy
                </Button>
            </div>
            <Editor
                ref={editorRef}
                previewStyle="vertical"
                initialValue="Your result will appear here"
                height="510px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
            />
        </div>
    )
}

export default OutputArea