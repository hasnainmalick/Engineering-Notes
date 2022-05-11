import React from 'react'

const App = () => {
    return (
        <div>
            App
            <h1>React CSS</h1>
            <h1>I am Hasnain</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus facilis facere reprehenderit tempora, dolor necessitatibus voluptatem magnam molestias reiciendis cupiditate. Quas, asperiores commodi esse illo ratione iure unde animi fugiat.</p>
            <h1>Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cast</th>
                        <th>Phone No.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hasnain</td>
                        <td>MaliCk</td>
                        <td>03130030685</td>
                    </tr>                        
                    <tr>
                        <td>Azeem</td>
                        <td>Memon</td>
                        <td>0312330685</td>
                    </tr>                        
                    <tr>
                        <td>Mashood</td>
                        <td>Mangrio</td>
                        <td>0318752685</td>
                    </tr>           
                </tbody>
            </table>

            <div className="divtag">I am div element</div>
            <span className="spantag">I am Span Tag</span>
        </div>
    )
}

export default App