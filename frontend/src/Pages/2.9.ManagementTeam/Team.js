import React, { useState } from 'react';
import Tree from 'react-d3-tree';
import Header from '../../components/Header/Header';
import "./Team.css"

const orgData = {
    name: 'आदित्य केशव दिवटे',
    attributes: {
        व्यवस्था: 'शाखाप्रमुख',
    },
    children: [
        {
            name: 'आयुष बाजीराव खोपडे',
            attributes: {
                व्यवस्था: 'व्यवस्था प्रमुख',
            },
            children: [
                {
                    name: 'ओंकार जाधव',
                    attributes: {
                        व्यवस्था: 'मैदान व्यवस्था',
                        ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                    }, children: [
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                    ]
                },
                {
                    name: 'निमेश यादव',
                    attributes: {
                        व्यवस्था: 'तासिका व्यवस्था ',
                        ठिकाण: "VIT College"
                    },children: [
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                    ]
                }, {
                    name: 'आदित्य घोरपडे',
                    attributes: {
                        व्यवस्था: 'कार्यक्रम व्यवस्था',
                        ठिकाण: "VIT College"
                    },children: [
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                    ]
                },
                {
                    name: 'कुणाल नरोडे',
                    attributes: {
                        व्यवस्था: 'संपर्क व्यवस्था',
                        ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                    },children: [
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                        {
                            name: 'ओंकार जाधव',
                            attributes: {
                                व्यवस्था: 'मैदान व्यवस्था',
                                ठिकाण: "प्रियदर्शनी शिक्षण संस्था"
                            },
                        },
                    ]
                },
            ],
        },
    ],
};


const Team = () => {
    const [treeState, setTreeState] = useState({
        translate: { x: 0, y: 0 },
        scale: 1,
    });

    // Define the separation object to adjust the horizontal and vertical separation
    const separation = { siblings: 1.8, nonSiblings: 3.2 };

    // Define the node shape properties for squares
    const nodeShape = {
        shape: 'rect',
        shapeProps: {
            width: 60, // Set the width of the square
            height: 60, // Set the height of the square
            fill: '#fff', // Set node background color
            stroke: '#3498db', // Set node border color
            strokeWidth: 2,
        },
    };

    const onZoom = (event) => {
        setTreeState({
            translate: event.translate,
            scale: event.scale,
        });
    };

    return (
        <>
            <Header />
            <div className="team">
                <h1>Organizational Tree</h1>
                <div className="tree-container">
                    <Tree
                        data={orgData}
                        orientation=''
                        separation={separation}
                        nodeSvgShape={nodeShape} // Apply the node shape properties
                        translate={treeState.translate}
                        scale={treeState.scale}
                        onZoom={onZoom}
                    />
                </div>
            </div>
        </>
    );
}

export default Team;