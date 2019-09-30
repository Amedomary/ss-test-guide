import React from 'react'

const rootClass = 'price';

const Price = (props) => {
    const { children } = props;
    return (
        <div className={rootClass}>
            {children}
        </div>
    )
};

export default Price;


// className	string	-
// price	other	-	0
// oldPrice	other	-	0
// clubPrice	other	-	0
// colorTheme	other	-	primary
// size	other	-	m
// isBold	bool	-	false
// direction	other	-	row
