import React, { useState } from "react";
import Company from "../components/main/company";

const Home = () => {
    const [searchCategoryString, setSearchCategoryString] = useState("");
    const [searchNameString, setSearchNameString] = useState("");
    const companiesMockData = [
        {
            companyName: "Media Mavericks",
            companyDescription: `"Медиа-агентство, приглашает студентов на практику для участия в создании креативного контента, организации медийных кампаний и разработке медиа-стратегий. Присоединяйтесь к нашей команде, чтобы проявить свой талант в области медиа и влиять на массовую аудиторию.`,
            avatar: "",
            category: "Развлекательная сфера",
        },
        {
            companyName: "FinTrust Bank",
            companyDescription: `Банковская компания, приглашающая студентов на практику для работы в сфере финансов и банковских услуг. Присоединяйтесь к нашей команде, чтобы погрузиться в мир банковской деятельности, освоить процессы кредитования, инвестирования и финансового анализа.`,
            avatar: "",
            category: "Финансовая сфера",
        },
        {
            companyName: "TechPro Solutions",
            companyDescription: `Инновационная IT-компания, приглашающая студентов на практику для разработки передовых технологических решений и создания уникальных пользовательских интерфейсов, где они смогут применить свои знания и получить ценный опыт в сфере разработки программного обеспечения.`,
            avatar: "",
            category: "IT-сфера",
        },
        {
            companyName: "EcoGreen Solutions",
            companyDescription: `Экологическая компания, приглашающая студентов на практику для работы над проектами, направленными на сохранение окружающей среды и развитие экологически устойчивых решений. Присоединяйтесь к нам, чтобы стать частью нашей команды, занимающейся созданием зеленых технологий и строительством экологически чистых объектов.`,
            avatar: "",
            category: "Медицина и биология",
        },
        {
            companyName: "Artisan Creations",
            companyDescription: `Компания в сфере дизайна и творчества, приглашает студентов на практику, где они смогут проявить свое творческое начало и развивать навыки в области графического дизайна, веб-разработки и медиа-производства. Присоединяйтесь к нашей команде и воплотите свои идеи в жизнь.`,
            avatar: "",
            category: "Развлекательная сфера",
        },
        {
            companyName: "HealthCare Innovators",
            companyDescription: `Инновационная медицинская компания, приглашает студентов на практику для разработки передовых медицинских технологий и исследования новых методов лечения. Присоединяйтесь к нам и вместе мы сможем внести положительные изменения в медицинскую сферу и улучшить здоровье людей.`,
            avatar: "",
            category: "Медицина и биология",
        },
        {
            companyName: "Food Fusion",
            companyDescription: `Компания в сфере пищевой индустрии, приглашает студентов на практику для разработки новых вкусовых комбинаций, тестирования рецептов и создания инновационных продуктов. Присоединяйтесь к нашей команде, чтобы расширить свой кулинарный опыт и внести свой вклад в мир гастрономии.`,
            avatar: "",
            category: "Пищевая сфера",
        },
        {
            companyName: "Adventure Explorers",
            companyDescription: `Туристическая компания, приглашающая студентов на практику для организации увлекательных приключений и путешествий. Присоединяйтесь к нашей команде, чтобы познакомиться с уникальными местами, развить навыки организации и вдохновить людей на открытия.`,
            avatar: "",
            category: "Развлекательная сфера",
        },
    ];

    return (
        <>
            <div className="post">
                Поиск по категориям:
                <select
                    value={searchCategoryString}
                    onChange={(e) => setSearchCategoryString(e.target.value)}
                >
                    <option value=""> Ничего</option>
                    <option value="Финансовая сфера">Финансовая сфера</option>
                    <option value="IT-сфера">IT-сфера</option>
                    <option value="Медицина и биология">
                        Медицина и биология
                    </option>
                    <option value="Пищевая сфера">Пищевая сфера</option>
                    <option value="Развлекательная сфера">
                        Развлекательная сфера
                    </option>
                </select>
                Поиск по названию:
                <input
                    type="text"
                    value={searchNameString}
                    onChange={(e) => setSearchNameString(e.target.value)}
                />
            </div>

            {companiesMockData
                .filter((item) => {
                    return searchCategoryString == " "
                        ? item
                        : item.category
                              .toLowerCase()
                              .includes(searchCategoryString.toLowerCase());
                })
                .filter((item) => {
                    return searchCategoryString == " "
                        ? item
                        : item.companyName
                              .toLowerCase()
                              .includes(searchNameString.toLowerCase());
                })
                .map((company, index) => (
                    <Company company={company} key={index} />
                ))}
        </>
    );
};

export default Home;
