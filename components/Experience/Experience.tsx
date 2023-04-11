import styles from "./Experience.module.scss"

function PathCard(props){
    return (
        <div className={styles.PathCard}>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

function Path(props){
    return (
        <div className={styles.Path}>
            <div className="">
                <h3 className={styles.scope}>{props.scope}</h3>
                <p className={styles.companyName}>{props.companyName}</p>
                <p className={styles.role}>{props.role}</p>
            </div>
            <PathCard title={props.title} description={props.description} />
        </div>
    )
}

export default function Experience(){
    const experiences = [
        {
            scope: '2015-2017',
            companyName: 'Polaris Mold Fabrication Corporation',
            role: 'EDM Technician',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Tortor dignissim convallis aenean et tortor at. In aliquam sem fringilla ut. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Fermentum dui faucibus in ornare. Neque viverra',
            title: '-dscrptn'
        },
        {
            scope: '2017-2022',
            companyName: 'Marinduque State College - Boac Campus',
            role: 'IT Student',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Tortor dignissim convallis aenean et tortor at. In aliquam sem fringilla ut. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Fermentum dui faucibus in ornare. Neque viverra',
            title: '-dscrptn'
        },
        {
            scope: '2022-Present',
            companyName: 'Marinduque State College - ICTSC',
            role: 'Computer Programmer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Tortor dignissim convallis aenean et tortor at. In aliquam sem fringilla ut. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Fermentum dui faucibus in ornare. Neque viverra',
            title: '-dscrptn'
        },
    ]

    return (
        <div className={styles.Experience}>
            <h1 className={styles.section_header}>
                Experience
            </h1>
            {
                experiences.map(exp => (
                    <Path scope={exp.scope}
                    companyName={exp.companyName}
                    role={exp.role}
                    description={exp.description}
                    title={exp.title}
                    />
                ))
            }
        </div>
    )
}