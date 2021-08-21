import './App.css';
// import ImportComponent from './R003_ImportConponent'
// import LifecycleEx from './R004_LifeCycleEx'
// import LifecycleEx from './R005_LifeCycleEx'
// import LifecycleEx from './R006_LifeCycleEx'
// import LifecycleEx from './R007_LifeCycleEx'
// import LifecycleEx from './R008_LifeCycleEx'
// import Es6 from './R009_Es6'
// import Variable from './R010_Variable'
// import SpreadOperator from './R011_SpreadOperator'
// import ClassPrototype from './R012_Class&Prototype'
// import ArrowFunc from './R013_ArrowFunction'
// import ForEach from './R014_ForEach'
// import Jquery from './R016_Jquery'
// import Props from './R017_Props'
// import PropsDatatype from './R018_PropsDatatype'
// import PropsBoolean from './R019_PropsBoolean'
// import PropsObjVal from './R020_PropsObjVal'
// import PropsRequired from './R021_PropsRequired'
// import PropsDefault from './R022_PropsDefault'
// import PropsNode from './R023_PropsNode'
// import ReactState from './R024_ReactState'
// import SetState from './R025_SetState'
// import ForceUpdate from './R026_ForceUpdate'
// import ComponentClass from './R027_ComponentClass'
// import PureComponentClass from './R028_PureComponentClass'
// import ShallowEqual from './R029_ShallowEqual'
// import FunctionComponent from './R030_FunctionComponent'
// import ReactHook from './R031_ReactHook'
// import Fragments from './R032_Fragments'
// import ReturnMap from './R033_ReturnMap'
// import ReactstrapAlerts from './R034_ReactstrapAlerts'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import ReactstrapBadges from './R035_ReactstrapBadges'
import ReactstrapBreadcrumps from './R036_ReactstrapBreadcrumps'

function App() {
  return (
    <div className="App">
        <h1>Start React 200!</h1>
        <p>CSS 적용하기</p>
        {/* <LifecycleEx
          prop_value = 'FromApp.js'/> */}

        {/* <Es6/> */}

        {/* <Variable/> */}
        {/* <SpreadOperator/> */}
        {/* <ClassPrototype/> */}
        {/* <ArrowFunc/> */}
        {/* <ForEach/> */}
        {/* <Jquery/> */}
        {/* <Props props_val = "THIS IS PROPS"/> */}
        {/* <PropsDatatype
          String = "react"
          Number = {200}
          Boolean = {1==1}
          Array = {[0,1,8]}
          ObjectJson = {{react:"리액트",twohundred:"200"}}
          Function = {console.log("FunctionProps:function!")}
        /> */}
        
        {/* <PropsBoolean BooleanTrueFalse = {false}/>
        <PropsBoolean BooleanTrueFalse/> */}
        {/* <PropsObjVal ObjectJson = {{react:"리액트",twohundred:"200"}}/> */}
        {/* <PropsRequired ReactNumber = {200}/> */}
        {/* <PropsDefault ReactNumber = {200}/> */}
        {/* <PropsNode>
          <span>node from App.js</span>
        </PropsNode> */}
        {/* <ReactState reactString={"react"}/> */}
        {/* <SetState/> */}
        {/* <ForceUpdate/> */}
        {/* <PureComponentClass/> */}
        {/* <ShallowEqual/> */}
        {/* <FunctionComponent contents='[THIS IS FunctionComponent]'/> */}
        {/* <ReactHook/> */}
        {/* <Fragments/> */}
        {/* <ReturnMap/> */}
        {/* <ReactstrapAlerts/> */}
        {/* <ReactstrapBadges/> */}
        <ReactstrapBreadcrumps/>
    </div>
  );
}

export default App;
