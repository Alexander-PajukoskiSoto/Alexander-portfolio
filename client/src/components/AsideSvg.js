import { React } from "react"
import { motion } from "framer-motion"
const BUBBLE_PATHS =     {
    path:["M1011 13.3333C1011 8.17868 1015.18 4 1020.33 4H1037.88C1040.16 4 1042 5.84353 1042 8.11765V8.11765C1042 13.5755 1037.58 18 1032.12 18H1015.67C1013.09 18 1011 15.9107 1011 13.3333V13.3333Z",
    "M960 23C960 16.3726 965.373 11 972 11H997C999.761 11 1002 13.2386 1002 16V28C1002 34.6274 996.627 40 990 40H966C962.686 40 960 37.3137 960 34V23Z",
    "M1064 153C1064 146.373 1069.37 141 1076 141H1101C1103.76 141 1106 143.239 1106 146V158C1106 164.627 1100.63 170 1094 170H1070C1066.69 170 1064 167.314 1064 164V153Z",
    "M1095 102C1095 98.134 1098.13 95 1102 95H1117C1119.76 95 1122 97.2386 1122 100V103C1122 106.314 1119.31 109 1116 109H1101C1097.69 109 1095 106.314 1095 103V102Z",
    "M1087 162.5C1087 158.358 1090.36 155 1094.5 155H1127C1129.21 155 1131 156.791 1131 159V162.5C1131 166.642 1127.64 170 1123.5 170H1092C1089.24 170 1087 167.761 1087 165V162.5Z",
    "M1050 65.5C1050 55.835 1057.84 48 1067.5 48H1081C1088.73 48 1095 54.268 1095 62V71C1095 76.5228 1090.52 81 1085 81H1056C1052.69 81 1050 78.3137 1050 75V65.5Z",
    "M983 7.2C983 3.22355 986.224 0 990.2 0H1011C1013.21 0 1015 1.79086 1015 4V4.5C1015 8.64214 1011.64 12 1007.5 12H987.8C985.149 12 983 9.85097 983 7.2V7.2Z",
    "M1078 53.5C1078 49.3579 1081.36 46 1085.5 46H1111C1113.21 46 1115 47.7909 1115 50V57.5C1115 61.6421 1111.64 65 1107.5 65H1083C1080.24 65 1078 62.7614 1078 60V53.5Z",
    "M460 530C460 526.134 463.134 523 467 523H491C493.761 523 496 525.239 496 528V544C496 547.314 493.314 550 490 550H466C462.686 550 460 547.314 460 544V530Z",
    "M587 446C587 442.134 590.134 439 594 439H609C611.761 439 614 441.239 614 444V447C614 450.314 611.314 453 608 453H593C589.686 453 587 450.314 587 447V446Z",
    "M510 450.5C510 440.835 517.835 433 527.5 433H550C552.761 433 555 435.239 555 438V452C555 459.732 548.732 466 541 466H516C512.686 466 510 463.314 510 460V450.5Z",
    "M558 401C558 397.134 561.134 394 565 394H590C592.761 394 595 396.239 595 399V407C595 410.314 592.314 413 589 413H564C560.686 413 558 410.314 558 407V401Z",
    "M845 531C845 527.134 848.134 524 852 524H867C869.761 524 872 526.239 872 529V532C872 535.314 869.314 538 866 538H851C847.686 538 845 535.314 845 532V531Z",
    "M758 548.5C758 544.358 761.358 541 765.5 541H798C800.209 541 802 542.791 802 545V548.5C802 552.642 798.642 556 794.5 556H763C760.239 556 758 553.762 758 551V548.5Z",
    "M778 558.5C778 554.358 781.358 551 785.5 551H810C812.209 551 814 552.791 814 555V558.5C814 562.642 810.642 566 806.5 566H783C780.239 566 778 563.762 778 561V558.5Z",
    "M707 506C707 502.134 710.134 499 714 499H725C727.761 499 730 501.239 730 504V509C730 512.314 727.314 515 724 515H713C709.686 515 707 512.314 707 509V506Z",
    "M656 529C656 526.239 658.239 524 661 524H670C673.314 524 676 526.686 676 530V533C676 535.762 673.761 538 671 538H663C659.134 538 656 534.866 656 531V529Z",
    "M399 146.08C399 143.827 400.827 142 403.08 142H414.5C419.194 142 423 145.806 423 150.5V150.5C423 155.194 419.194 159 414.5 159H402.032C400.357 159 399 157.643 399 155.968V146.08Z",
    "M364 197C364 192.582 367.582 189 372 189H390C393.866 189 397 192.134 397 196V197C397 201.418 393.418 205 389 205H370C366.686 205 364 202.314 364 199V197Z",
    "M310 212.5C310 208.358 313.358 205 317.5 205H325C328.314 205 331 207.686 331 211V214C331 218.418 327.418 222 323 222H318.5C313.806 222 310 218.194 310 213.5V212.5Z",
    "M386 150C386 145.582 389.582 142 394 142H404C406.761 142 409 144.239 409 147V151C409 155.418 405.418 159 401 159H394C389.582 159 386 155.418 386 151V150Z",
    "M460 133C460 128.582 463.582 125 468 125H472C474.761 125 477 127.239 477 130V134C477 138.418 473.418 142 469 142H468C463.582 142 460 138.418 460 134V133Z",
    "M714 528C714 524.134 717.134 521 721 521H741C745.418 521 749 524.582 749 529V529C749 535.627 743.627 541 737 541H714V528Z"
],
color:[
    "#FFE353",
    "#FFE353",
    "#FFE353",
    "#FFE353",
    "#53A2FF",
    "#FFE353",
    "#53A2FF",
    "#53A2FF",
    "#53A2FF",
    "#FFE353",
    "#FFE353",
    "#FFE353",
    "#FFE353",
    "#53A2FF",
    "#FFE353",
    "#FFE353",
    "#FFE353",
    "#FFE353",
    "#53A2FF",
    "#53A2FF",
    "#53A2FF",
    "#53A2FF",
    "#FFE353"
]
}




const RECT_PATH=[
    {
    x:430,
    y:121,
    width:20,
    height:14,
    rx:7,
    fill:"#FFE353"},
    {
            x:483,
            y:104,
            width:34,
            height:17,
            rx:8.5,
            fill:"#FFE353"
    },
    {
            x:484,
            y:137,
            width:34,
            height:17,
            rx:8.5,
            fill:"#53A2FF"
    },
    {
            x:423,
            y:164,
            width:34,
            height:17,
            rx:8.5,
            fill:"#53A2FF"
    }

]
const AsideSvg = (props) => (
    <>
    <svg
      viewBox="0 0 1131 649"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      id="asideBox"
    >
      <g id="AsideNoImage">
        <g id="asideTitle">
          <path
            id="Rectangle 98"
            d="M0 99H219.537C324.174 99 409 183.826 409 288.463V288.463C409 342.884 364.884 387 310.463 387H0V99Z"
            fill="#FFD500"
          />
          <g id="asideTitleText">
            <text
              id="bout"
              fill="white"
              xmlSpace="preserve"
              style={{
                whiteSpace: "pre",
              }}
              fontFamily="Inter"
              fontSize={50}
              letterSpacing="0em"
            >
              <tspan x={58} y={162.682}>
                {"bout\n"}
              </tspan>
            </text>
            <text
              id="e"
              fill="white"
              xmlSpace="preserve"
              style={{
                whiteSpace: "pre",
              }}
              fontFamily="Inter"
              fontSize={50}
              letterSpacing="0em"
            >
              <tspan x={222} y={162.682}>
                {"e"}
              </tspan>
            </text>
            <text
              id="A"
              fill="#FD804B"
              xmlSpace="preserve"
              style={{
                whiteSpace: "pre",
              }}
              fontFamily="Inter"
              fontSize={50}
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x={23} y={161.682}>
                {"A\n"}
              </tspan>
            </text>
            <text
              id="A_2"
              fill="white"
              xmlSpace="preserve"
              style={{
                whiteSpace: "pre",
              }}
              fontFamily="Inter"
              fontSize={50}
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x={25} y={162.682}>
                {"A\n"}
              </tspan>
            </text>
            <text
              id="M"
              fill="#FD804B"
              xmlSpace="preserve"
              style={{
                whiteSpace: "pre",
              }}
              fontFamily="Inter"
              fontSize={50}
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x={176} y={162.682}>
                {"M\n"}
              </tspan>
            </text>
            <text
              id="M_2"
              fill="white"
              xmlSpace="preserve"
              style={{
                whiteSpace: "pre",
              }}
              fontFamily="Inter"
              fontSize={50}
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x={178} y={163.682}>
                {"M"}
              </tspan>
            </text>
          </g>
        </g>
        <path
          id="asideContent"
          d="M0 176H487.5C618.115 176 724 281.885 724 412.5V526C724 593.931 668.931 649 601 649H0V176Z"
          fill="#FFE353"
        />
        <path
          id="projectBTNContainer"
          d="M460 276.5C460 134.839 574.839 20 716.5 20H1002C1044.53 20 1079 54.4741 1079 97V420C1079 482.408 1028.41 533 966 533H500C477.909 533 460 515.091 460 493V276.5Z"
          fill="#53A2FF"
        />
        <g id="projectBTN">
          <path
            id="Rectangle 104"
            d="M635 252C635 218.863 661.863 192 695 192H936C954.225 192 969 206.775 969 225V287C969 320.137 942.137 347 909 347H674C652.461 347 635 329.539 635 308V252Z"
            fill="#FFE353"
          />
          <g id="ProjectText">
            <text
              id="P"
              fill="#FD804B"
              xmlSpace="preserve"
              style={{
                whiteSpace: "pre",
              }}
              fontFamily="Inter"
              fontSize={64}
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x={679+15} y={295.773-12}>
                {"P "}
              </tspan>
            </text>
            <g id="P_2">
              <text
                fill="white"
                xmlSpace="preserve"
                style={{
                  whiteSpace: "pre",
                }}
                fontFamily="Inter"
                fontSize={64}
                letterSpacing="0em"
              >
                <tspan x={722.438+15} y={297.773-12} />
              </text>
              <text
                fill="white"
                xmlSpace="preserve"
                style={{
                  whiteSpace: "pre",
                }}
                fontFamily="Inter"
                fontSize={64}
                fontWeight="bold"
                letterSpacing="0em"
              >
                <tspan x={681+15} y={297.773-12}>
                  {"P"}
                </tspan>
              </text>
            </g>
            <text
              id="rojects"
              fill="white"
              xmlSpace="preserve"
              style={{
                whiteSpace: "pre",
              }}
              fontFamily="Inter"
              fontSize={64}
              letterSpacing="0em"
            >
              <tspan x={718+15} y={294.773-12}>
                {"rojects"}
              </tspan>
            </text>
          </g>
        </g>
        <g id="asideBubbles">
            {RECT_PATH.map((path,index)=><motion.rect
                id={`asideRectBubble${index}`}
                x={path.x}
                y={path.y}
                width={path.width}
                height={path.height}
                rx={path.rx}
                fill={path.fill}
                animate={{x:[0,-10,-0]}}
                transition={{
                    times:[0,1],
                    duration: Math.floor(Math.random()*3 + 2),
                    repeat:Infinity,
                    type:"keyframes",
                    ease:"easeInOut"
                }}
            />)}

            {BUBBLE_PATHS.path.map((path,index)=>(
                <motion.path
                key={index}
                id={`asideBubble${index}`}
                d={path}
                fill={BUBBLE_PATHS.color[index]}
                animate={{x:[0,-10,-0]}}
                transition={{
                    times:[0,1],
                    duration: Math.floor(Math.random()*3 + 2),
                    repeat:Infinity,
                    type:"keyframes",
                    ease:"easeInOut"
                }}
                />
            ))}
        </g>
      </g>
    </svg>
    <div className="aboutMeTextContainer">
            <h4>
              Hello! I am a Junior Fullstack Developer and very passionate about web development! I am alway looking for new things to learn, in my freetime aswell as at school/work. Thus far I have a highschool deploma in IT and also about to graduate my fourth extra IT-year!<br/> Certificates:Html/CSS basics, Javascript basics
            </h4>
    </div>
    </>

  )
  export default AsideSvg;
