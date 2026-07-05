const quizData = [
    {
        left: "\\( \\pi^e \\)",
        right: "\\( e^\\pi \\)",
        answer: "right",
        hint: "関数 \\( \\frac{\\ln x}{x} \\) か、\\( e^x>1+x\\)を考える",
        explanation: "\\( e^x>1+x\\)に\\(x=\\pi/e-1\\)を代入すると、\\(e^\\pi>\\pi^e\\)が得られる。"
    },
    {
        left: "\\( \\sqrt{2} \\)",
        right: "\\( \\sqrt[3]{3} \\)",
        answer: "right",
        hint: "どちらも6乗する。",
        explanation: "\\( (\\sqrt{2})^6 = 2^3 = 8 \\)、\\( (\\sqrt[3]{3})^6 = 3^2 = 9 \\) なので、右の方が大きい。"
    },
    {
        left: "\\( \\log_{2} 3 \\)",
        right: "\\( \\log_{3} 5 \\)",
        answer: "left",
        hint: "どちらも 1.5 より大きいか小さいか考える。",
        explanation: "\\( \\log_{2} 3 > 1.5 \\) (なぜなら \\( 3 > 2^{1.5} = \\sqrt{8} \\))、一方で \\( \\log_{3} 5 < 1.5 \\) (なぜなら \\( 5 < 3^{1.5} = \\sqrt{27} \\)) 。"
    },
    {
        left: "\\( 2^{100} \\)",
        right: "\\( 3^{75} \\)",
        answer: "right",
        hint: "指数を 25 で揃える。",
        explanation: "\\( 2^{100} = (2^4)^{25} = 16^{25} \\)、\\( 3^{75} = (3^3)^{25} = 27^{25} \\) なので右が大きい。"
    },
    {
        left: "\\( \sin 1 \\)",
        right: "\\( \cos 1 \\)",
        answer: "left",
        hint: "1ラジアンは約57度です。45度と比較する。",
        explanation: "\\( 1 \\text{ rad} \\approx 57.3^\\circ \\) です。\\( 45^\\circ \\) を超えると \\( \sin \\) の方が \\( \cos \\) より大きい。"
    }
];
