import * as React from 'react';
import './About.css';

interface TeamMemberProps {
    name: string;
    image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, image }) => {
    return (
        <div className="team-member">
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>
    );
};

const About: React.FC = () => {
    return (
        <div className="about-us">
            <div className="welcome-box">
            {/* <div className="welcome-box" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUHjGuyvwODZNZ3jZsFVrOgCRRYb-RUqUsQ&usqp=CAU")', backgroundSize: 'cover', height: '400px' }}> */}
                <h2>Welcome to Chef2go!</h2>
            </div>
            <div className="content-container">
                <div className="image-container">
                    <img
                        src="https://c.ndtvimg.com/2022-05/uhjvddb_chef-generic_625x300_10_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
                        alt="Code2Chef Kitchen 1"
                    />
                </div>
                <div className="paragraph-box">
                    <p>
                        Welcome to our website! We are passionate about providing delicious and
                        high-quality meals to students. Our platform, Chef2go, is designed to
                        be a one-stop solution for your culinary needs. Whether you're looking
                        for quick and convenient food delivery or seeking inspiration through
                        chef-created recipes, we've got you covered.
                    </p>
                </div>
            </div>
            <div className="content-container">
                <div className="paragraph-box">
                    <p>
                        At Chef2go, we believe in enhancing your culinary experience by
                        offering exclusive deals, premium experiences, and a curated collection
                        of recipes. Our team of chefs works tirelessly to bring you diverse and
                        exciting dishes that cater to your taste buds and culinary aspirations.
                    </p>
                </div>
                <div className="image-container">
                    <img
                        src="https://foodparadise.network/wp-content/uploads/2023/06/20230605113817_fpdl.in_top-view-table-full-delicious-food-assortment_23-2149141339_normal.jpg"
                        alt="Code2Chef Kitchen 2"
                    />
                </div>
            </div>
            <div className="content-container">
                <div className="image-container">
                    <img
                        src="https://img.freepik.com/premium-photo/group-chefs-looking-prepared-pasta-kitchen_107420-18583.jpg"
                        alt="Code2Chef Kitchen 3"
                    />
                </div>
                <div className="paragraph-box">
                    <p>
                        Search by Chef:
                        Dive into a world of culinary creativity with the "Search by Chef" feature, showcasing a comprehensive list of recipes crafted by talented chefs.
                        Students can seamlessly order directly from the featured chefs, transforming their meal experience into a personalized and chef-curated delight.
                    </p>
                </div>
            </div>
            <div className="content-container">
                <div className="paragraph-box">
                    <p>
                        Search by Recipes:

                        Empowering students to explore and discover new flavors, the "Search by Recipes" option allows users to find their desired dishes effortlessly.
                        Place orders based on specific recipes, ensuring a tailored and satisfying dining experience.
                    </p>
                </div>
                <div className="image-container">
                    <img
                        src="https://t3.ftcdn.net/jpg/01/76/33/14/360_F_176331484_nLHY9EoW0ETwPZaS9OBXPGbCJhT70GZe.jpg"
                        alt="Code2Chef Kitchen 4"
                    />
                </div>
            </div>
            <div className="content-container">
                <div className="image-container">
                    <img
                        src="https://imageio.forbes.com/specials-images/imageserve/62b0d4954f202c2343cbe185/Male-hand-pressing-subscription-button-with-the-word-subscribe-written-on-wooden/960x0.jpg?format=jpg&width=960"
                        alt="Code2Chef Kitchen 5"
                    />
                </div>
                <div className="paragraph-box">
                    <p>
                        Premium Subscription Benefits:

                        For students with a premium subscription, exclusive recipe videos directly from the chefs are unlocked, providing step-by-step guidance for a hands-on cooking experience.
                        This premium feature enhances the platform, making it an ideal choice for students who aspire to elevate their culinary skills.
                    </p>
                </div>
            </div>
            <div className="full-box">
                <p>
                    Thank you for visiting our Chef2go page. 
                    Explore our website, discover new recipes, and embark on a delightful culinary
                    journey with us!
                </p>
                <button className="get-started-button">Get Started</button>
            </div>
            <div className="meet-the-team">
                <h2>Meet the Top Chefs</h2>
                <div className="team-members-container">
                    <TeamMember
                        name="Chef Alex Johnson"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKdOonAalpyVwdTHhu1WMgx1GKPIzXm1tfQ&usqp=CAU"
                    />
                    <TeamMember
                        name="Chef John Doe"
                        image="https://media.istockphoto.com/id/135722009/photo/successful-chef.jpg?s=612x612&w=0&k=20&c=3aMZoOdQdCMmC7Zk5z3p31PXPlImoqXekk8aOIGuvUU="
                    />
                    <TeamMember
                        name="Chef Sam"
                        image="https://c8.alamy.com/comp/BT0M92/young-beautiful-female-chef-portrait-in-kitchen-BT0M92.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;