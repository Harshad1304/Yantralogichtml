const navMenuLinks = [
    {
        lable: "Home",
        href: '/',
        submenu: false,
    },
    {
        lable: "Services",
        href:'#',
        submenu:[
            { lable: "Application Services", href: "#" },
            { lable: "Software Development", href: "#" },
            { lable: "Web Development", href: "#" },
            { lable: "Mobile Application", href: "#" },
            { lable: "UI/UX Design", href: "#" },
            { lable: "Data Science", href: "#" },
            { lable: "IOT", href: "#" },
        ]
    },
    {
        lable: "Solutions",
        href:'#',
        submenu:[
            { lable: "CRM", href: "#" },
            { lable: "ERP", href: "#" },
            { lable: "Automation", href: "#" },
            { lable: "E-Commerce", href: "#" },
            { lable: "Data Analytics", href: "#" },
            { lable: "Learning Management System", href: "#" },
            { lable: "IOT Dashboard", href: "#" },
        ]
    },
    {
        lable: "Carrers",
        href: "#",
        submenu: false
    },
    {
        lable: "About Us",
        href: "#",
        submenu: false
    },
    {
        lable: "Contact Us",
        href: '#',
        submenu: false
    }
];

export default navMenuLinks;
