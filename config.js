var config = {
    style: 'mapbox://styles/wrengriner1111/cmacv1lbe009201s8gbx2ga61',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoid3JlbmdyaW5lcjExMTEiLCJhIjoiY205OHYxbXoxMDRkbDJrcTkxYmdyMzZxaSJ9.kzhRGXkoBE28TIvTF92YsA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Final Project',
    subtitle: 'Male and Female Comparison Across The South',
    byline: 'Wren Griner and Chloe Holloway',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Introduction',
            image: '',
            description: 'Within Southern Literature, female authors are more likely to defy the status quo when describing economic activity than male authors. Comparing the protagonists of William Faulkner to those of Zora Neale Hurston, Alice Walker, and Jesmyn Ward highlights the many different forms Southern Literature can take. A common expectation for readers may include a typical American family encountering issues like racism, sexism, or classism. While those themes are prevalent, stories by female authors are much more complex. The following data exemplifies how societal barriers do not necessarily impact economic exchanges and movement to the degree readers would expect, particularly in the realm of gender.',
            location: {
                center: [-89.48848661057376, 34.28249827482276],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'As I Lay Dying: The Bundren House',
            image: './assets/asi.jpg',
            description: 'In As I Lay Dying by William Faulkner, a white lower class family in Mississippi travels from their home to the nearby city of Jefferson over the course of the novel. The data collected from the novel depicts a substantial amount more of movement-based data than economic exchanges. Furthermore,  of the few economic units of data, only one was female. Two major female characters in the novel are Dewey Dell and Addie Bundren, the latter of whom is dead pretty much the entire novel—the plot essentially revolving around the aftermath of that. Because of the lack of female characters, of course there would be more male-made purchases. Considering the fact that Faulkner is male, there might be more context for why that is. For instance, what would a middle class adult white man (Faulkner) know about what a lower class pregnant girl would purchase.',
            location: {
                center: [-89.48848661057376, 34.28249827482276], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './assets/firestone_farm.jpg',
            description: 'Taking place in the early 20th century, gender norms are still very rigid. Men generally have more autonomy and opportunity, given better income than women. Furthermore, men do not experience sexism as an obstacle. Dewey Dell faces sexism when trying to find a way to terminate her pregnancy. She is objectified and manipulated. The majority of the Bundren family is male—compromising of Anse, Jewel, Darl, Cash, and Vardaman. Assuming Anse is making most purchases as the patriarch of the family, the question raises of why there are so few data points on economic exchange. A key detail is that Bundren family is lower class. Not only are they lower class, they live in a rural area. Hypothetically, almost every purchase made would require major movement to and from the location of purchase.',
            location: {
                center: [-89.48848661057376, 34.28249827482276], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God: Orlando',
            image: './assets/color_purple_field.jpg',
            description: 'Because of the nature of the story, there is a lot more data to interpret for this novel. When looking at economic exchanges for men and women, men tend to buy more goods, and women vary in their purchases. A drawable conclusion from this is that southern men are more materialistic. Furthermore, this novel travels to more urban areas like Orlando. In large cities, more economic opportunities are available. The main plot of this novel surrounds the life of Janie, a lower class black woman who cares more about being happy than being comfortable. Her first marriage was arranged by her grandmother who thought the man, Logan, would provide for her and ensure a safe and secure life. He buys Janie a donkey, among other material things, however he never shows love for her. He treats her more like domestic help than a wife',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {            
            id: 'chapter-four',
            alignment: 'left',
            hidden: false,
            title: 'Eatonville',
            image: './assets/color_purple_field.jpg',
            description: 'Her second husband, Jody Starks, is much more doting. He is also well off, but he treats Janie like an equal, in the beginning at least. During her marriage to him, Janie is able to make her own purchases and instigate economic activity. This is where female authors like Hurston start to separate from classic male authors like Faulkner. There is plenty of data depicting general economic exchanges and they are made by both male and female characters alike. Again, the main difference is the thing being purchased. When Janie makes a purchase, it is just as likely to be for a service or for food as it is a good, unlike most male protagonists. This further proves that she cares more about having happy experiences. Most women are likely the same as they’ve grown accustomed to not asking for a lot and making the most of what they already have, especially at the time the novel is set.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-five',
            alignment: 'right',
            hidden: false,
            title: 'Everglades',
            image: './assets/color_purple_field.jpg',
            description: 'Throughout her life, the time where she describes being most content is being married to Tea Cake, her third husband. He is not as wealthy as the first two, and is generally irresponsible with money. Despite that, she does not resent him for it, because she is happy with him. There is a lot of economic data from Tea Cake, almost entirely goods. As a lower class man, he is eager to buy things once he has enough money, especially given gender norms that paint men as owning more. Janie never experiences his greed because of the same gender norm for women.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
             onChapterExit: []            
        },
        {
            id: 'chapter-six',
            alignment: 'left',
            hidden: false,
            title: 'The Color Purple: Georgia',
            image: './assets/color_purple_field.jpg',
            description: 'Alice Walker’s novel includes characters with some of the most diverse demographics one can find in Southern Literature. Telling the story of a black queer woman named Celie who has experienced sexual abuse most of her life, taboo topics are bound to appear. Almost every purchase made in this novel was a good or service, regardless of gender. A big theme is the idea that women, even black queer women, should be able to enjoy the same pleasures. This shows how female authors acount for more autonomy of female characters as well as more attention of feminine stories.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []            
        },
        {
            id: 'chapter-seven',
            alignment: 'right',
            hidden: false,
            title: 'Memphis',
            image: './assets/color_purple_field.jpg',
            description: 'Shug Avery is another central female character that is the driving force for Celie’s personal journey. She is responsible for a major instance of movement when her and Celie go to Memphis. Given that this section of the novel is so focused on them, it makes sense that most of the data collected is from female purchasers. While they experience societal barriers, they are able to overcome them. This detail of female-written stories differs greatly from Faulkner. While both acknowledge obstacles are present, female authors are more likely to include female perseverance in their writing.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []            
        },
        {
            id: 'chapter-eight',
            alignment: 'left',
            hidden: false,
            title: 'Africa',
            image: './assets/color_purple_field.jpg',
            description: 'Something that is not accounted for by the data is the fact that the novel is written between two first-person perspectives—Celie and Nettie. The lack of omniscience in the novel makes it hard to account for all characters. As the novel progresses, less and less purchasers are male. As Celie and Nettie grow up and get away from the dominant men in their life, their economic activity and movement is not included. Celie is learning how to be independent and content, while Nettie is finding joy in taking a motherly role during her time in Africa. Regardless, both women choose the path they go down, something not often depicted in male-written novels.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-nine',
            alignment: 'right',
            hidden: false,
            title: 'Salvage The Bones: Batiste house',
            image: './assets/color_purple_field.jpg',
            description: 'The most modern novel of the set, gender norms are not quite the same as those say in As I Lay Dying or The Color Purple. However, the lower class, rural town in which it is set especially with the protagonists being lower class people of color, enables some stereotypes to endure. With the impending landfall of hurricane Katrina, there is little economic data in the novel given that purchasing things is not the priority for the Batiste family. Though the story is set more modern, and transportation is more easily accessed, the family’s socioeconomic status is an obstacle to evacuating. Similar to As I Lay Dying, there is movement required for most economic purchases.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-ten',
            alignment: 'left',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-eleven',
            alignment: 'right',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-twelve',
            alignment: 'left',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-thirteen',
            alignment: 'right',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
    },
    {
            id: 'chapter-fourteen',
            alignment: 'left',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
    },
    {
            id: 'chapter-fifteen',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusion',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
    },
    ]
}
