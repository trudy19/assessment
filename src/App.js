import './App.css';
import CKEditor from 'ckeditor4-react-advanced';
import {useState} from 'react';
import {Button} from '@material-ui/core';
import icon from './icon.png';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';

function App() {
    const [text, setText] = useState("")
    const [publish, setPublish] = useState("")
    const onEditorChange = (evt) => {

        setText(evt.editor.getData())
    }
    const publishfunc=()=>{
      localStorage.setItem("article",text)

    }
    return (
        <div className="App">

            <div className="container">
                <div className="editor-container">
                    <h1 className="title">Customisation</h1>
                    <h2 className="subtitle">The text will reflect mobile view</h2>
                    <div className="editor">
                        <div className="accordion-title">
                            <span>Text</span>
                            <span className="icondrop"></span>
                        </div>
                        <div>
                            <div className="wysiwyg">
                                <CKEditor
                                    data={text}
                                    onChange={onEditorChange}
                                    config={
                                        {
                                            extraPlugins: 'stylescombo',
                                            Language: ['en'],
                                            toolbar: [
                                                ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo', '-', 'Scayt', '-', 'Link', 'Unlink', '-', 'Image', 'HorizontalRule', 'SpecialChar', 'Smiley', '-', 'Source', '-', 'Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat', '-'],
                                                ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Styles', 'Format', 'Font', 'FontSize', 'BGColor', 'StylesCombo', 'TextColor']
                                            ],
                                            heading: {
                                                model: 'paragraph', title: 'Paragraph', class: 'ck_heading_paragraph'
                                            },
                                            width: '544px',
                                            height: '117px',
                                            margin:"10px"
                                      
                                           
                                            
                                        }

                                    }
                                />
                            </div>
                            <button className="button " onClick={() => publishfunc()}>
                                Publish
                                <span className="Icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mobile">
                    <div className="mobile-skin"></div>

                    <div className="mobile-content">
                            <div className="render">
                                <div className="title-render">Text</div>
                                <div className="text-render" dangerouslySetInnerHTML={{__html: text||localStorage.getItem('article')}}></div>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;