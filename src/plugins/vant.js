import { Button, Cell, Dialog, Toast, Form, Field, CellGroup, List, Icon } from 'vant'

export default function setupVant(app) {
  app.use(Button).use(Cell).use(Dialog).use(Toast).use(Form).use(Field).use(CellGroup).use(List).use(Icon)
}
