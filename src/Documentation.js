import React from 'react'
import ReactDOM from 'react-dom'
import Title from './components/Title.jsx'
import Subtitle from './components/Subtitle.jsx'
import Content from './components/Content.jsx'
import './Documentation.css'
import Description from './components/Description.jsx'
import Image from './components/Image.jsx'
import InstructionButton from './components/instructionButton.jsx'
import { Link, useLocation } from 'react-router-dom'


export default function App(props) {

  const state = useLocation().state || {}
  console.log(useLocation())
  console.log(state)

  return(
  <div className='documentation'>
    <div style={{display:'flex', alignItems: 'center'}}>
      <Title title='1. What is Tablature Editor?'/>
      <Link to={{pathname: '/'}}>
        <InstructionButton character='X'/>
      </Link>
    </div>
    <Description>Tablature Editor is a vim-inspired, code-based guitar tabs maker and editor designed for efficiency. 
      It is hoped that the speed of tablature drafting can be optimized with a single-line, multi-input system. Currently, this 
      webapp is in its early stages of development. It is hoped that an import, export, audio preview, and even 
      login-system can be eventually implemented, as well as a community space to share, collaborate on tablature. For any 
      recommendation or input, please contact my email: marcus41881653@gmail.com .
    </Description>
    <hr></hr>
    <Title title='2. Commands & Usage '/>
    <Description>This section goes over the console commands and usage thereof that make Tablature Editor possible.
      In each topic, relevant command functions are explained, and a code sample (implementation and output) 
      is then be provided and explored. It is critical that the syntax of the commands is followed, otherwise no output will 
     be generated.  
    </Description>
    <Subtitle title='2.1 Adding and Deleting Rows'/>
    <Content>These commands will add or delete rows of measures from the tablature. Each row consists of 2 musical measures 
      identified by the blue index on the top-left. 
    </Content>
    <Image name='1'/>
    <Content>Syntax <br></br>ar: add 1 row<br></br>
    ar[number]: add [number] rows<br></br>br: delete 1 row<br></br>br[number]: delete [number] rows<br></br>
    </Content>
    <Image name='2'/>
    <Content>Expected Output: adds 15 rows (30 measures)
    </Content>
    <Subtitle title='2.2 Hiding and Showing Boxes'/>
    <Content>A 'box' is each rounded blue-rectangle that surrounds a measure. In each measure, it is possible to add/remove/edit boxes 
      to demonstrate tempo in the tablature. For example, I may have 4 boxes in a certain measure, each with notes, to represent quarter notes. If you would like
      to see your tablature more clearly, you may "hide" the outline of these boxes using this command. Afterwards, if you would like
      to edit more, you may "show" these boxes once again. 
    </Content>
    <Content>Syntax <br></br>hide: hides box outlines<br></br>
    show: unhides box outlines</Content>
    <Image name='3'/>
    <Content>Expected Output: hides box outlines</Content>
    <Image name='4'/>
    <Subtitle title='2.3 Adding and Editing Boxes'/>
    <Content>These commands are used to add and edit boxes. Editing and adding a box are one of the same command -- the term "adding"
      a box refers to the case when a box is not yet created. Two indecies are needed to add and edit boxes: the measure index and the 
      box index. The measure index is which measure you would like to edit, and the box is which box the measure you decide to select. Box 
      indecies can be found below each box.
    </Content>
    <Image name='5'/>
    <Content>Syntax <br></br>.[measure index].[box index].[notes from top to bottom (corresponding from string e~E)]: edit/add a box</Content>
    <Image name='6'/>
    <Content>Expected Output: edits box 1-1 to 000000</Content>
    <Image name='7'/>
    <Content>To add spaces in your tabs, use 'n' instead of a number</Content>
    <Image name='8'/>
    <Content>Expected Output: adds an empty box: 1-2</Content>
    <Image name='9'/>
    <Subtitle title='2.4 Clearing and Deleting Boxes'/>
    <Content>These commands are used to clear and delete boxes. It is only possible to clear individual boxes but it is possible to 
      delete an entire measure (in addition to deleting individual boxes). Deleting the entire measure means that all but 1 box is
       deleted and that box is cleared. 
    </Content>
    <Content>Syntax <br></br>.[measure index].[box index].clear: clear a box<br></br>
    del.[measure index]: delete a measure<br></br>del.[measure index].[box index]: delete a box</Content>
    <Image name='10'/>
    <Image name='11'/>
    <Content>Expected Output: measure 1 is deleted</Content>
    <Image name='12'/>
    <Subtitle title='2.5 Adding Empty Boxes'/>
    <Content>Although you can add empty boxes with .[measure index].[box index].nnnnnn, it is far more convenient  
      in cases that you need 8 boxes for example, with some being spaces, that you first create all boxes as empty boxes with
      a single command, then edit each as you see fit.
    </Content>
    <Content>Syntax <br></br>box.[measure index].[number of boxes]</Content>
    <Content>The number of boxes that you input translates to the total number of boxes in the measure. Let's say you 
      already have 3 edited boxes in measure 1, inputting 'box.1.6' will create 3 empty boxes since it is the "total" number
      of boxes. The decision for 'total boxes' was thought to be convenient when you know you need 8 boxes in your measure and you can just create them
      in addition to your existing boxes.
    </Content>
    <Image name='13'/>
    <Image name='14'/>
    <Content>Expected Output: measure 1 has 5 total boxes, with the first being the same as before</Content>
    <Image name='15'/>
    <Subtitle title='2.6 Multi-Command Input'/>
    <Content>The Multi-Command Input system is the reason why I believe this tablature system to be fast. You may chain any of the commands
      from the above documentation into 1 line of input as long as they are separated by a single-space. Note that the commands are 
      executed in order so later commands overwrites earlier commands in cases of conflict. 
    </Content>
    <Image name='16'/>
    <Content>Expected Output: 1-1 becomes '100000', 2-2 becomes '000000', 2-1 becomes ' 9 0 9', measure 2 gains 2 empty boxes, show boxes</Content>
    <Image name='17'/>

  </div>)
}
