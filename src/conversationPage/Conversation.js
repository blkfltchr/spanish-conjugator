import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import RandomButton from '../components/home/RandomButton';
import OptionsButton from '../components/home/OptionsButton';

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Open Sans',
  headerBgColor: 'blue',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: 'blue',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


const Conversation = () => {
    return ( 
        <div>
            <div style={{marginLeft: '30px'}}>
                <ThemeProvider theme={theme}>
                    <ChatBot
                        speechSynthesis={{ enable: true, lang: 'es' }}
                        steps={[
                            {
                                id: '1',
                                message: '¿Cómo te llamas?',
                                trigger: '2',
                            },
                            {
                                id: '2',
                                user: true,
                                trigger: '3',
                            },
                            {
                                id: '3',
                                message: '¿De dónde eres?',
                                trigger: '4',
                            },
                            {
                                id: '4',
                                user: true,
                                trigger: '5',
                            },
                            {
                                id: '5',
                                message: '¿En qué trabajas?',
                                trigger: '6'
                            },
                            {
                                id: '6',
                                user: true,
                                trigger: '7',
                            },
                            {
                                id: '7',
                                message: 'OK! Hasta luego!',
                                end: true,
                            },
                            
                        ]}
                    />
                </ThemeProvider> 
            </div>
            <RandomButton />
            <OptionsButton />
        </div>
    );
}
 
export default Conversation;