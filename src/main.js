const hex_callbacks = [];
function register_hex_callback(cb) {
    hex_callbacks.push(cb);
}

function apply_hex_callbacks(value) {
    for (const hex_callback of hex_callbacks) {
        hex_callback(value);
    }
}

const bin_callbacks = [];
function register_bin_callback(cb) {
    bin_callbacks.push(cb);
}

function apply_bin_callbacks(value) {
    for (const bin_callback of bin_callbacks) {
        bin_callback(value);
    }
}


function inp_binary_hex_keydown(elem, event) {
    if ((event.code === 'ArrowLeft' && elem.selectionStart === 0) || (event.code === 'Tab' && event.shiftKey)) {
        let found_elem = false;
        const inp_binary_hex_elems = document.getElementsByClassName('inp-binary-hex');
        for (let i = inp_binary_hex_elems.length; i >= 0; i--) {
            if (found_elem) {
                inp_binary_hex_elems[i].focus();
                inp_binary_hex_elems[i].setSelectionRange(2, 2);
                event.preventDefault();
                break;
            }
            if (inp_binary_hex_elems[i] === elem) {
                found_elem = true;
            }
        }
    }
    else if ((event.code === 'ArrowRight' && elem.selectionStart === 2) || event.code === 'Tab') {
        let found_elem = false;
        const inp_binary_hex_elems = document.getElementsByClassName('inp-binary-hex');
        for (let i = 0; i < inp_binary_hex_elems.length; i++) {
            if (found_elem) {
                inp_binary_hex_elems[i].focus();
                inp_binary_hex_elems[i].setSelectionRange(0, 0);
                event.preventDefault();
                break;
            }
            if (inp_binary_hex_elems[i] === elem) {
                found_elem = true;
            }
        }
    }
    else if (event.code === 'ArrowDown') {
        // switch to corresponding bin field
        const inp_binary_hex_elems = document.getElementsByClassName('inp-binary-hex');
        const inp_binary_bin_elems = document.getElementsByClassName('inp-binary-bin');
        for (let i = 0; i < inp_binary_hex_elems.length; i++) {
            if (inp_binary_hex_elems[i] === elem) {
                inp_binary_bin_elems[i].focus();
                const new_select = inp_binary_hex_elems[i].selectionStart * 4;
                inp_binary_bin_elems[i].setSelectionRange(new_select, new_select);
                event.preventDefault();
                break;
            }
        }
    }
    else if (event.code === 'Home') {
        const inp_binary_hex_elems = document.getElementsByClassName('inp-binary-hex');
        inp_binary_hex_elems[0].focus();
        inp_binary_hex_elems[0].setSelectionRange(0, 0);
    }
    else if (event.code === 'End') {
        const inp_binary_hex_elems = document.getElementsByClassName('inp-binary-hex');
        inp_binary_hex_elems[inp_binary_hex_elems.length - 1].focus();
        inp_binary_hex_elems[inp_binary_hex_elems.length - 1].setSelectionRange(0, 0);
    }
    else if (!['Digit0', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'KeyA', 'KeyB', 'KeyC', 'KeyD', 'KeyE', 'KeyF', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.code)) {
        if (!(event.code === 'KeyV' && (event.metaKey || event.ctrlKey))) {
            event.preventDefault();
        }
    }
}

function inp_binary_bin_keydown(elem, event) {
    if ((event.code === 'ArrowLeft' && elem.selectionStart === 0) || (event.code === 'Tab' && event.shiftKey)) {
        let found_elem = false;
        const inp_binary_bin_elems = document.getElementsByClassName('inp-binary-bin');
        for (let i = inp_binary_bin_elems.length; i >= 0; i--) {
            if (found_elem) {
                inp_binary_bin_elems[i].focus();
                inp_binary_bin_elems[i].setSelectionRange(8, 8);
                event.preventDefault();
                break;
            }
            if (inp_binary_bin_elems[i] === elem) {
                found_elem = true;
            }
        }
    }
    else if ((event.code === 'ArrowRight' && elem.selectionStart === 8) || event.code === 'Tab') {
        let found_elem = false;
        const inp_binary_bin_elems = document.getElementsByClassName('inp-binary-bin');
        for (let i = 0; i < inp_binary_bin_elems.length; i++) {
            if (found_elem) {
                inp_binary_bin_elems[i].focus();
                inp_binary_bin_elems[i].setSelectionRange(0, 0);
                event.preventDefault();
                break;
            }
            if (inp_binary_bin_elems[i] === elem) {
                found_elem = true;
            }
        }
    }
    else if (event.code === 'ArrowUp') {
        // switch to corresponding hex field
        const inp_binary_hex_elems = document.getElementsByClassName('inp-binary-hex');
        const inp_binary_bin_elems = document.getElementsByClassName('inp-binary-bin');
        for (let i = 0; i < inp_binary_bin_elems.length; i++) {
            if (inp_binary_bin_elems[i] === elem) {
                inp_binary_hex_elems[i].focus();
                const new_select = inp_binary_bin_elems[i].selectionStart / 4;
                inp_binary_hex_elems[i].setSelectionRange(new_select, new_select);
                event.preventDefault();
                break;
            }
        }
    }
    else if (event.code === 'Home') {
        const inp_binary_bin_elems = document.getElementsByClassName('inp-binary-bin');
        inp_binary_bin_elems[0].focus();
        inp_binary_bin_elems[0].setSelectionRange(0, 0);
    }
    else if (event.code === 'End') {
        const inp_binary_bin_elems = document.getElementsByClassName('inp-binary-bin');
        inp_binary_bin_elems[inp_binary_bin_elems.length - 1].focus();
        inp_binary_bin_elems[inp_binary_bin_elems.length - 1].setSelectionRange(0, 0);
    }
    else if (!['Digit0', 'Digit1', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.code)) {
        event.preventDefault();
    }
}


function remove_parent_by_classname(classname) {
    const elems = document.getElementsByClassName(classname);
    while (elems.length > 0) {
        elems[0].parentNode.parentElement.removeChild(elems[0].parentNode);
    }
}

function remove_by_classname(classname) {
    const elems = document.getElementsByClassName(classname);
    while (elems.length > 0) {
        elems[0].parentElement.removeChild(elems[0]);
    }
}

function remove_inp_binary() {
    remove_parent_by_classname('inp-binary-hex');
    remove_parent_by_classname('inp-binary-bin');
    remove_by_classname('td-binary');
    remove_by_classname('td-ascii');
    remove_by_classname('td-utf8');
    // reset utf8 state
    utf8_state = 0;
}

function add_inp_binary_hex(value) {
    apply_hex_callbacks(value);
    const tr_inp_binary_hex = document.getElementById('tr-inp-binary-hex');
    const td = document.createElement('td');
    const inp = document.createElement('input');
    inp.size = 2;
    inp.classList.add('inp-binary');
    inp.classList.add('inp-binary-hex');
    inp.value = value;
    inp.addEventListener('input', () => { inp_binary_hex_input(inp); });
    inp.addEventListener('keydown', () => { inp_binary_hex_keydown(inp, event); });
    td.appendChild(inp);
    tr_inp_binary_hex.appendChild(td);
    return inp;
}

function add_inp_binary_bin(value) {
    apply_bin_callbacks(value);
    const tr_inp_binary_bin = document.getElementById('tr-inp-binary-bin');
    const td = document.createElement('td');
    const inp = document.createElement('input');
    inp.size = 8;
    inp.classList.add('inp-binary');
    inp.classList.add('inp-binary-bin');
    inp.value = value;
    inp.addEventListener('input', () => { inp_binary_bin_input(inp); });
    inp.addEventListener('keydown', () => { inp_binary_bin_keydown(inp, event); });
    td.appendChild(inp);
    tr_inp_binary_bin.appendChild(td);
    return inp;
}

function add_inp_binary_hex_info() {
    const tr_inp_binary_hex = document.getElementById('tr-inp-binary-hex');
    const td = document.createElement('td');
    td.classList.add('td-binary');
    td.classList.add('no-border');
    td.innerHTML = '<span class="span-info clr-green">&larr; enter hex</span>';
    tr_inp_binary_hex.appendChild(td);
}

function add_inp_binary_bin_info() {
    const tr_inp_binary_bin = document.getElementById('tr-inp-binary-bin');
    const td = document.createElement('td');
    td.classList.add('td-binary');
    td.classList.add('no-border');
    td.innerHTML = '<span class="span-info clr-green">&larr; or binary</span>';
    tr_inp_binary_bin.appendChild(td);
}


// ASCII

function add_ascii_hex(hex_value) {
    const num = parseInt(hex_value, 16);
    const tr_ascii_hex = document.getElementById('tr-ascii-hex');
    const td = document.createElement('td');
    td.classList.add('td-ascii');
    if (hex_value.length === 2 && !hex_value.includes('-')) {
        td.innerText = hex_value;
        td.classList.add( (num >= 0x00 && num <= 0x7f) ? 'clr-green' : 'clr-red');
    }
    else {
        td.innerText = '-';
    }
    tr_ascii_hex.append(td);
}
register_hex_callback(add_ascii_hex);

function add_ascii_bin(value) {
    const tr_ascii_bin = document.getElementById('tr-ascii-bin');
    const td = document.createElement('td');
    td.classList.add('td-ascii');
    if (value.length === 8) {
        const msb = value.substring(0, 1);
        const lsbs = value.substring(1);
        const span_msb = document.createElement('span');
        span_msb.innerText = msb;
        span_msb.classList.add( (msb === '1') ? 'clr-red' : 'clr-green');
        const span_lsbs = document.createElement('span');
        span_lsbs.innerText = lsbs;
        span_lsbs.classList.add('clr-yellow');
        td.appendChild(span_msb);
        td.appendChild(span_lsbs);
    }
    else {
        td.innerText = '-';
    }
    tr_ascii_bin.append(td);
}
register_bin_callback(add_ascii_bin);

function add_ascii_out(bin_value) {
    const tr_ascii_out = document.getElementById('tr-ascii-out');
    const td = document.createElement('td');
    td.classList.add('td-ascii');
    if (bin_value.length === 8) {
        const num = parseInt(bin_value, 2);
        const ctrl_map = ['NUL', 'SOH', 'STX', 'ETX', 'EOT', 'ENQ', 'ACK', 'BEL', 'BS', 'TAB', 'LF', 'VT', 'FF', 'CR', 'SO', 'SI', 'DLE', 'DC1', 'DC2', 'DC3', 'DC4', 'NAK', 'SYN', 'ETB', 'CAN', 'EM', 'SUB', 'ESC', 'FS', 'GS', 'RS', 'US', 'Space'];
        let value = '<span class="span-info clr-red">invalid</span>';
        if (num >= 0x00 && num <= 0x20) value = '<span class="span-char"><i>' + ctrl_map[num] + '</i></span>';
        else if (num >= 0x21 && num <= 0x7e) value = '<span class="span-char">' + String.fromCharCode(num) + '</span>';
        else if (num === 0x7f) value = '<span class="span-char"><i>DEL</i></span>';
        td.innerHTML = value;
    } else {
        td.innerText = '-';
    }
    tr_ascii_out.append(td);
}
register_bin_callback(add_ascii_out);


// *************************
// UTF-8

// 0 = expecting leading byte
// 1-3 = expecting n continuation bytes
let utf8_state = 0;
let utf8_seq_len = 0;
let utf8_seq_hex = '';
let utf8_bin_seq = '';

function utf8_leading_byte(num) {
    if ((num & 0x80) === 0x00) return 0; // 1-byte seq
    if ((num & 0xe0) === 0xc0) return 1; // 2-byte seq
    if ((num & 0xf0) === 0xe0) return 2; // 3-byte seq
    if ((num & 0xf8) === 0xf0) return 3; // 4-byte seq
    return -1;
}

function utf8_continuation_byte(num) {
    return (num & 0xc0) === 0x80;
}


function add_utf8_hex(hex_value) {
    const num = parseInt(hex_value, 16);
    let current_byte;
    let bits_unexpected;
    let bits_leading;
    let bits_continuation;
    let bits_payload;
    let last_utf8_state = utf8_state;

    if (utf8_state === 0) {
        utf8_state = utf8_leading_byte(num);
        if (utf8_state === 0) {
            utf8_seq_len = 1;
            utf8_seq_hex = hex_value;
            bits_leading = '0';
            bits_payload = (num & 0x7f).toString(2).padStart(7, '0');
            utf8_bin_seq = bits_payload;
            current_byte = '<span class="span-info clr-pink">single byte</span>';
            hex_clr = 'clr-pink';
            add_utf8_codepoint((hex_value.length == 2 && !hex_value.includes('-')) ? bits_payload : '-', 1);
        }
        else if (utf8_state === -1) {
            if ((num & 0xc0) === 0x80) {
                // unexpected continutation byte
                bits_unexpected = '10';
                bits_payload = (num & 0x3f).toString(2).padStart(6, '0');
                current_byte = '<span class="span-info clr-red">unexpected<br/>continuation byte!</span>';
            }
            else {
                // e.g. 111111000 (0xf5)
                bits_unexpected = (num).toString(2).padStart(8, '0');
                bits_payload = '';
                current_byte = '<span class="span-info clr-red">unexpected byte!</span>';
            }
            utf8_bin_seq = '';
            hex_clr = 'clr-red';
            utf8_state = 0;
            add_utf8_codepoint('-', 1);
        }
        else {
            utf8_seq_len = utf8_state + 1;
            utf8_seq_hex = hex_value;
            bits_leading = '1'.repeat(utf8_state + 1) + '0';
            bits_payload = (num).toString(2).padStart(8, '0');
            bits_payload = bits_payload.substring(utf8_seq_len + 1);
            utf8_bin_seq = bits_payload;
            current_byte = '<span class="span-info clr-pink">leading byte<br/>n = ' + utf8_seq_len + '</span>';
            hex_clr = 'clr-pink';
        }
    }
    else {
        if (utf8_continuation_byte(num)) {
            bits_continuation = '10';
            bits_payload = (num & 0x3f).toString(2).padStart(6, '0');
            utf8_bin_seq += bits_payload;
            utf8_state--;
            utf8_seq_hex += hex_value;
            current_byte = '<span class="span-info clr-lightblue">continuation byte<br/>&rarr;</span>';
            hex_clr = 'clr-lightblue';
            if (utf8_state === 0) {
                add_utf8_codepoint((hex_value.length == 2 && !hex_value.includes('-')) ? utf8_bin_seq : '-', utf8_seq_len);
            }
        }
        else {
            bits_unexpected = (num).toString(2).padStart(8, '0');
            add_utf8_codepoint('-', utf8_seq_len - last_utf8_state );
            utf8_state = utf8_leading_byte(num);
            current_byte = '<span class="span-info clr-red">expected continuation byte</span><br\>';
            if (utf8_state === 0) {
                utf8_seq_len = 1;
                utf8_seq_hex = hex_value;
                current_byte += '<span class="span-info clr-pink">single byte</span>';
                add_utf8_codepoint((hex_value.length == 2 && !hex_value.includes('-')) ? bits_unexpected : '-', 1);
            }
            else {
                utf8_seq_len = utf8_state + 1;
                utf8_seq_hex = hex_value;
                current_byte += '<span class="span-info clr-pink">leading byte<br/>n = ' + utf8_seq_len + '</span>';
            }
            hex_clr = 'clr-red';
        }
    }

    // hex
    const tr_utf8_hex = document.getElementById('tr-utf8-hex');
    const td = document.createElement('td');
    td.classList.add('td-utf8');
    if (hex_value.length === 2 && !hex_value.includes('-')) {
        td.innerText = hex_value;
        td.classList.add( hex_clr);
    }
    else {
        td.innerText = '-';
    }
    tr_utf8_hex.append(td);

    // bin
    const tr_utf8_bin = document.getElementById('tr-utf8-bin');
    const td_bin = document.createElement('td');
    td_bin.classList.add('td-utf8');
    if (hex_value.length === 2 && !hex_value.includes('-')) {
        if (bits_unexpected) {
            const span_unexpected = document.createElement('span');
            span_unexpected.classList.add('clr-red');
            span_unexpected.innerText = bits_unexpected;
            td_bin.appendChild(span_unexpected);
        }
        if (bits_leading) {
            const span_leading = document.createElement('span');
            span_leading.classList.add('clr-pink');
            span_leading.innerText = bits_leading;
            td_bin.appendChild(span_leading);
        }
        if (bits_continuation) {
            const span_continuation = document.createElement('span');
            span_continuation.classList.add('clr-lightblue');
            span_continuation.innerText = bits_continuation;
            td_bin.appendChild(span_continuation);
        }
        if (bits_payload) {
            const span_payload = document.createElement('span');
            span_payload.classList.add('clr-yellow');
            span_payload.innerText = bits_payload;
            td_bin.appendChild(span_payload);
        }
    }
    else {
        td_bin.innerText = '-';
    }
    tr_utf8_bin.append(td_bin);

    // info
    const tr_utf8_info = document.getElementById('tr-utf8-info');
    const td_info = document.createElement('td');
    td_info.classList.add('td-utf8');
    if (hex_value.length === 2 && !hex_value.includes('-')) {
        td_info.innerHTML = current_byte;
    }
    else {
        td_info.innerText = '-';
    }
    tr_utf8_info.append(td_info);
}
register_hex_callback(add_utf8_hex);


function add_utf8_codepoint(bin_seq, col_span) {
    const tr_utf8_payload = document.getElementById('tr-utf8-payload');
    const td_payload = document.createElement('td');
    td_payload.classList.add('td-utf8');
    if (bin_seq !== '-') {
        td_payload.classList.add('clr-yellow');
        const table_utf8_payload_split = document.createElement('table');
        table_utf8_payload_split.classList.add('table-payload');
        const tr_utf8_payload_split = document.createElement('tr');
        const bin_bytes = [];
        switch (bin_seq.length) {
            case 7:
                bin_bytes.push(bin_seq);
                break;
            case 11:
                bin_bytes.push(bin_seq.substr(0, 3));
                bin_bytes.push(bin_seq.substr(3));
                break;
            case 16:
                bin_bytes.push(bin_seq.substr(0, 8));
                bin_bytes.push(bin_seq.substr(8));
                break;
            case 21:
                bin_bytes.push(bin_seq.substr(0, 5));
                bin_bytes.push(bin_seq.substr(5, 8));
                bin_bytes.push(bin_seq.substr(13));
                break;
        }
        for (const bin_byte of bin_bytes) {
            const td_utf8_payload_split = document.createElement('td');
            td_utf8_payload_split.classList.add('td-utf8');
            let payload_split_html = '';
            if (bin_byte.length % 8 !== 0) {
                payload_split_html += '<span class="clr-gray">' + '0'.repeat(8 - (bin_byte.length % 8)) + '</span>';
            }
            payload_split_html += '<span class="clr-yellow">' + bin_byte + '</span><br/>';
            payload_split_html += '<span class="clr-yellow">' + parseInt(bin_byte, 2).toString(16).padStart(2, '0') + '</span>';
            td_utf8_payload_split.innerHTML = payload_split_html;
            tr_utf8_payload_split.append(td_utf8_payload_split);
        }
        table_utf8_payload_split.appendChild(tr_utf8_payload_split);
        td_payload.appendChild(table_utf8_payload_split);
    }
    else {
        td_payload.innerText = '-';
    }
    td_payload.colSpan = col_span;
    tr_utf8_payload.append(td_payload);

    const tr_utf8_codepoint = document.getElementById('tr-utf8-codepoint');
    const td_codepoint = document.createElement('td');
    td_codepoint.classList.add('td-utf8');
    if (bin_seq !== '-') {
        const codepoint = parseInt(bin_seq, 2);
        const codepoint_padded = codepoint.toString(16).padStart(4, '0');
        td_codepoint.innerHTML = '<span class="span-char">&#x'+codepoint_padded+';</span><br/><span class="span-info">U+' + codepoint_padded + '</span>';
        // overlong sequence?
        if ((bin_seq.length === 11 && bin_seq.startsWith('0000')) || (bin_seq.length === 16 && bin_seq.startsWith('00000')) || (bin_seq.length === 21 && bin_seq.startsWith('00000'))) {
            td_codepoint.innerHTML += '<br/><span class="span-info clr-red">overlong sequence!</span>';
        }
        // high surrogate?
        if (codepoint >= 0xd800 && codepoint <= 0xdbff) {
            td_codepoint.innerHTML += '<br/><span class="span-info clr-red">high surrogate</span>';
        }
        // low surrogate?
        if (codepoint >= 0xdc00 && codepoint <= 0xdfff) {
            td_codepoint.innerHTML += '<br/><span class="span-info clr-red">low surrogate</span>';
        }
        // greater than U+10FFFF?
        if (codepoint > 0x10ffff) {
            td_codepoint.innerHTML += '<br/><span class="span-info clr-red">invalid codepoint!</span>';
        }
    }
    else {
        td_codepoint.innerText = '-';
    }
    td_codepoint.colSpan = col_span;
    tr_utf8_codepoint.append(td_codepoint);
}




function inp_binary_hex_input(elem) {
    let binary_hex_all = '';
    let current_selection_start = 0;
    let found_selection_start = false;
    for (const inp_binary_hex of document.getElementsByClassName('inp-binary-hex')) {
        if (!found_selection_start) {
            if (inp_binary_hex === elem) {
                current_selection_start += elem.selectionStart;
                found_selection_start = true;
            }
            else {
                current_selection_start += 2;
            }
        }
        binary_hex_all += inp_binary_hex.value;
    }
    // replace non hex chars
    binary_hex_all = binary_hex_all.toLowerCase().replace(/[^0-9a-f]/g, '');

    // split to bytes
    const hex_bytes = binary_hex_all.match(/[0-9a-f]{1,2}/g);

    remove_inp_binary();

    // re-add inp-binary-hex and inp-binary-bin elements
    let set_selection_start = false;
    if (hex_bytes === null) {
        // add at least one field
        add_inp_binary_hex('');
        add_inp_binary_hex_info();
        add_inp_binary_bin('');
        add_inp_binary_bin_info();
        window.location.hash = '';
    }
    else {
        let bin_value_all = '';
        for (const hex_byte of hex_bytes) {
            const inp = add_inp_binary_hex(hex_byte)
            if (!set_selection_start) {
                if ([1,2].includes(current_selection_start)) {
                    inp.focus();
                    inp.setSelectionRange(current_selection_start, current_selection_start);
                    set_selection_start = true;
                }
                else {
                    current_selection_start -= 2;
                }
            }
            const bin_value = Number('0x' + hex_byte).toString(2);
            const bin_value_padded = hex_byte.length == 1 ? bin_value.padStart(4, '0') : bin_value.padStart(8, '0');
            add_inp_binary_bin(bin_value_padded);
            bin_value_all += bin_value_padded;
        }
        window.location.hash = bin_value_all;
    }
    if (!set_selection_start) {
        document.getElementsByClassName('inp-binary-hex')[0].focus();
        document.getElementsByClassName('inp-binary-hex')[0].setSelectionRange(0, 0);
    }
}



function inp_binary_bin_input(elem) {
    let binary_bin_all = '';
    let current_selection_start = 0;
    let found_selection_start = false;
    for (const inp_binary_bin of document.getElementsByClassName('inp-binary-bin')) {
        if (!found_selection_start) {
            if (inp_binary_bin === elem) {
                current_selection_start += elem.selectionStart;
                found_selection_start = true;
            }
            else {
                current_selection_start += 8;
            }
        }
        binary_bin_all += inp_binary_bin.value;
    }
    // replace non hex chars
    binary_bin_all = binary_bin_all.replace(/[^01]/g, '');

    // split to bytes
    const bin_bytes = binary_bin_all.match(/[01]{1,8}/g);

    remove_inp_binary();

    // re-add inp-binary-hex and inp-binary-bin elements
    let set_selection_start = false;
    if (bin_bytes === null) {
        // add at least one field
        add_inp_binary_hex('');
        add_inp_binary_hex_info();
        add_inp_binary_bin('');
        add_inp_binary_bin_info();
        window.location.hash = '';
    }
    else {
        let bin_value_all = '';
        for (const bin_byte of bin_bytes) {
            bin_value_all += bin_byte;
            const inp = add_inp_binary_bin(bin_byte)
            if (!set_selection_start) {
                if ([1,2,3,4,5,6,7,8].includes(current_selection_start)) {
                    inp.focus();
                    inp.setSelectionRange(current_selection_start, current_selection_start);
                    set_selection_start = true;
                }
                else {
                    current_selection_start -= 8;
                }    
            }
            let hex_value_padded = '--';
            if (bin_byte.length == 8) {
                const hex_value = parseInt(bin_byte, 2).toString(16);
                hex_value_padded = bin_byte.length == 8 ? hex_value.padStart(2, '0') : hex_value;
            }
            else if (bin_byte.length >= 4) {
                const bin_value_padded = bin_byte.padStart(8, '0');
                const hex_value = parseInt(bin_value_padded, 2).toString(16);
                hex_value_padded = hex_value.charAt(0) + '-';
            }
            add_inp_binary_hex(hex_value_padded);
        }
        window.location.hash = bin_value_all;
    }
    if (!set_selection_start) {
        document.getElementsByClassName('inp-binary-bin')[0].focus();
        document.getElementsByClassName('inp-binary-bin')[0].setSelectionRange(0, 0);
    }
}

function init(bin_value) {
    remove_inp_binary();
    add_inp_binary_bin('');
    const inp_binary_bin = document.getElementsByClassName('inp-binary-bin')[0];
    inp_binary_bin.value = bin_value;
    inp_binary_bin.dispatchEvent(new Event('input'));
    const inp_binar_hex_elems = document.getElementsByClassName('inp-binary-hex');
    inp_binar_hex_elems[inp_binar_hex_elems.length - 1].focus();
    inp_binar_hex_elems[inp_binar_hex_elems.length - 1].setSelectionRange(2, 2);
}
