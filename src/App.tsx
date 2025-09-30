import AppRouter from "./constants/router";
import { MantineProvider } from "@mantine/core";
import {ModalsProvider} from "@mantine/modals"
import '@mantine/core/styles.css';
import theme from "./shared/theme/theme";
import './global.css'
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import { Notifications } from "@mantine/notifications";
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
      <Notifications position="top-right" zIndex={2077} limit={3} />
      <AppRouter />
      </ModalsProvider>
    </MantineProvider>
  )
}
