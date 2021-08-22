import './App.css';
import CKEditor from 'ckeditor4-react-advanced';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import icon from './icon.png';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp'; function App() {
  const [text, setText] = useState("")
  const [publish, setPublish] = useState("")
  const onEditorChange = (evt) => {

    setText(evt.editor.getData())
  }

  return (
    <div className="App">


      <div className="Groupe84">

        <div className="Rectangledrop"></div>
        <h1>Text</h1>
        <div className="icondrop"></div>
      </div>
      <div className="webeditor">
        <CKEditor
          data={text}
          onChange={onEditorChange}
          config={
            {
              extraPlugins: 'stylescombo',
              Language: ['en'],
              toolbar: [
                ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo', '-', 'Scayt', '-', 'Link', 'Unlink', '-', 'Image', 'HorizontalRule', 'SpecialChar', 'Smiley', '-', 'Source', '-', 'Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat', '-'],
                ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'Styles', 'Format', 'Font', 'FontSize', 'BGColor', 'TextColor', 'StylesCombo']
              ],
              heading: {
                model: 'paragraph', title: 'Paragraph', class: 'ck_heading_paragraph'
              },
              width: '545px',
              height: '81px',
              padding: "0px",
              top: "371px",
              left: "217px",
            }

          }
        />
        <div className="button " onClick={() => setPublish(text)}>
          <div className="cadre_button" ></div>
          <h1>Publish</h1>
          <div className="Icon">
            <div className="Shape_frame">
            </div>
            <div className="shape_form"></div>
          </div>
        </div>
        <div className="verify">
          <div className="image">{Text}</div>
          <h1>Text</h1>
          <div className="textoutput" dangerouslySetInnerHTML={{ __html: text }}></div>
          <div className="rectangle3"></div>
        </div>
        <div className="rectangle82">
        </div>
      </div>
      <div className="iphone">
        <h1>Text</h1>
        <div className="textoutput" dangerouslySetInnerHTML={{ __html: publish }}></div>
        <div className="rectangle3">

        </div>
        <div className="rectangle82"></div>
      </div>
    </div>


  );
}

export default App;
