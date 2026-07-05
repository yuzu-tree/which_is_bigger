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
        left: "\\( \\sin 1 \\)",
        right: "\\( \\cos 1 \\)",
        answer: "left",
        hint: "1ラジアンは約57度。45度と比較する。",
        explanation: "\\( 1 \\text{ rad} \\approx 57.3^\\circ \\) 。\\( 45^\\circ \\) を超えると \\( \sin \\) の方が \\( \cos \\) より大きい。"
    },
    {
        left: "\\( \\tan 1 \\)",
        right: "\\( 1 \\)",
        answer: "left",
        hint: "1ラジアンは約57度。45度のときのtanの値を思い出す。",
        explanation: "\\( 1 \\text{ rad} \\approx 57.3^\\circ \\) 。\\( \\tan 45^\\circ = 1 \\) であり、第1象限で \\( \\tan \\) は単調増加するため、\\( \\tan 1 > 1 \\) となる。"
    },
    {
        "left": "\\( \\sin(\\cos 1) \\)",
        "right": "\\( \\cos(\\sin 1) \\)",
        "answer": "right",
        "hint": "sin x と cos x の交点である 45度（π/4 ≒ 0.785）と、中身の数値の大小を比べる。",
        "explanation": "\\( \\cos 1 \\approx 0.54 \\), \\( \\sin 1 \\approx 0.84 \\) 。\\( x < \\frac{\\pi}{4} \\approx 0.785 \\) の範囲では \\( \\sin x < \\cos x \\) が成り立つため、\\( x = \\cos 1 \\) を代入した \\( \\sin(\\cos 1) < \\cos(\\cos 1) \\) が言える。さらに \\( \\cos \\) はこの範囲で減少関数のため \\( \\cos(\\cos 1) < \\cos(\\sin 1) \\) となり、右辺が大きくなる。"
    },
    {
        "left": "\\( \\pi^2 \\)",
        "right": "10",
        "answer": "right",
        "hint": "近似値で求める。",
        "explanation": "\\( \\pi \\approx 3.1416 \\) です。実際に2乗を計算すると \\( \\pi^2 \\approx 9.8696 \\) となり、10 にはわずかに届かない。"
    },
    {
        "left": "\\( \\sqrt{2} + \\sqrt{3} \\)",
        "right": "\\( \\pi \\)",
        "answer": "left",
        "hint": "近似値で求めるが、小数第3まで必要。",
        "explanation": "\\( \\sqrt{2} \\approx 1.414 \\) 、\\( \\sqrt{3} \\approx 1.732 \\) なので、左辺の合計は \\( 3.146 \\dots \\) になる。一方、\\( \\pi \\approx 3.141 \\dots \\) 。"
    }
];
