import { User, Calendar, LifeBuoy, Settings, Link, Clock, LogOut } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<User size={20} />} text="My Profile" />
          <SidebarItem icon={<Link size={20} />} text="Event Type" />
          <SidebarItem icon={<Calendar size={20} />} text="Bookings" />
          <SidebarItem icon={<Clock size={20} />} text="Availability" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
          <SidebarItem icon={<LogOut size={20} />} text="Logout" />
        </Sidebar>
      </div>
    </>
  )
}

export default App
