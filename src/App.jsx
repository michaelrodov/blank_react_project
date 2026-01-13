import { useRef } from 'react';
import { AppContainer, Header, Title, Subtitle, Card } from './App.styled.jsx';


/**
 * This hook will mimic the useState hook
 * @param {*} value 
 * @returns {Array} - The current state and a function to update it
 */
function useStoreMyValuesHook(value) {
    return [value, () => {}];
};

function App() {
  const inputRef = useRef();
  
  return (
    <AppContainer>
      <Header>
        <Title>Simple React Project</Title>
        <Subtitle>Built with React, Vite, and Styled Components</Subtitle>
      </Header>
      <Card className="input-card">
        <div>
          <span>Sticky panel</span>        
          <input
            id={'textInputField'}
            className="text-input user-input"
            data-input-type="text"
            data-priority="high"
            placeholder="Search employees..."
            ref={inputRef}
            type="text" 
          />
        </div>
      </Card>
      <Card>
          <h2>Place Table Here</h2>
      </Card>
    </AppContainer>
  );
}

export default App;