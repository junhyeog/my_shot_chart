<p align="center"> 
<a href="https://basket.now.sh/"><img width="80" style="margin: 0 auto" alt="title" src="public/static/titleIcon.png"></a>
<h1 align="center">My Shot Chart</h1>
</p>

<p align="center">This Web is a Shot Chart that can record an individual's practice for <br/>systematic basketball shoting practice.</p>

<p align="center">
<img width="300" style="margin:0 auto" src="public/static/totalview.png"/>
</p>
## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install
```

## Usage
[My Shot Chart](https://basket.now.sh/)

1. 공을 던질 스팟을 선택한다.
2. 공을 던진 후, 그 결과를 버튼이나 키보드로 입력한다.
3. 결과는 브라우저(로컬 스토리지)에 저장된다.

## UI 표현 방식 - Pie chart

* 해당 스팟의 성공률에 따라 스팟의 색이 결정된다. 성공률이 높을수록 초록색에, 낮을수록 빨간색에 가까워진다. Pie chart의 색도 마찬가지이다.

### 1,2,3번째 Piechart의 내용은 다음과 같다.

1. 자신이 서있는 스팟의 종류에 따라 2점 스팟일 경우에는 첫 번째 Pie chart에 2점슛의 성공률이 표시되고, 3점 스팟일 경우에는 3점슛의 성공률이 표시된다.
2. 자신이 서있는 스팟에서의 성공률이 표시된다.
3. 스팟의 종류에 상관없이 모든 슛의 성공률이 표시된다.

* [github repository](https://github.com/junhyeog/basketball_shoot_chart)
