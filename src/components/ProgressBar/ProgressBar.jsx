import {ProgressBar, Circle, Arrowhead, Line } from './ProgressBar.styled';

const renderProgressBar  = (step) => {
    return ( 
<ProgressBar>
<Circle active={step === 1}>1</Circle>
<Line />
<Arrowhead />
<Circle active={step === 2}>2</Circle>
<Line />
<Arrowhead />
<Circle active={step === 3}>3</Circle>
<Line />
<Arrowhead />
<Circle active={step === 4}>3</Circle>
</ProgressBar>

     );
}
 
export default renderProgressBar ;