import { createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    deepB: [
      '#228be6',
      '#dce4f5',
      '#b9c7e2',
      'rgba(82, 85, 91, 1)',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81',
    ],
    blue: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      'rgba(82, 85, 91, 1)',
      'rgba(64, 66, 71, 1)',
      '#424e88',
      '#364379',
    ],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: '36px' },
    },
  },

  components: {
        Select: {
      defaultProps: {
        size: "xs",     
        radius: "md",  
        variant: "filled",
        styles: {
          input: {
            padding: "2px 8px", 
            fontSize: "14px",
            minHeight: "28px",
            width: '50px'
          },
          dropdown: {
            borderRadius: "md",
          },
          option: {
            fontSize: "14px",
            padding: "4px 8px",
          },
        },
      },
    },
    Button: {
      defaultProps: {
        radius: 'xl',
        variant: 'filled',
        color: 'blue.6',
      },
    },

    TextInput: {
      defaultProps: {
        radius: 'md',
        size: 'sm',
      },
      styles: {
        input: {
          borderColor: '#748dc1',
          '&:focus': {
            borderColor: '#228be6',
          },
        },
      },
    },

    Card: {
      defaultProps: {
        shadow: 'md',
        radius: 'lg',
        padding: 'lg',
      },
      styles: {
        root: {
          border: '1px solid #e0e0e0',
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        },
      },
    },
  },
});

export default theme;
