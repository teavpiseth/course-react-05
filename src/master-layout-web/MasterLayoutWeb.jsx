import HeaderWeb from './HeaderWeb'
import FooterWeb from './FooterWeb'
import { Outlet } from 'react-router'

export default function MasterLayoutWeb() {
  return (
    <div style={{ width: "100%" }}>
      <HeaderWeb />
        <Outlet />
      <FooterWeb />
    </div>
  )
}
