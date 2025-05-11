function FieldValidator(field) {
    this.field = field;
    this.errors = [];
}
FieldValidator.prototype.validate = function () {
    let value = this.field.value.trim();
    this.errors = [];
    // Validate required field
    if (this.field.hasAttribute('data-required') && value === '') {
        this.errors.push('This is required field');
    }
    // Validate Email
    if (this.field.hasAttribute('data-email')) {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!emailRegex.test(value)) {
            this.errors.push('Email is not correct');
        }
    }
    // Validate Min Length
    if (this.field.hasAttribute('data-min-length')) {
        const minLength = this.field.getAttribute('data-min-length');
        if (value.length < minLength) {
            this.errors.push(`Min length should be ${minLength}`);
        }
    }
    this.showErrors();

    return this.errors.length === 0;
};
FieldValidator.prototype.showErrors = function () {
    let errorContainer = this.field.nextElementSibling;
    if (!errorContainer || !errorContainer.classList.contains('error-msg')) {
        errorContainer = document.createElement('div');
        errorContainer.classList = 'error-msg small text-danger';
        this.field.parentNode.appendChild(errorContainer);
    }

    if (this.errors.length) {
        this.field.style.borderColor = 'red';
        errorContainer.innerHTML = this.errors.join('<br>');
    } else {
        this.field.style.borderColor = 'green';
        errorContainer.innerHTML = '';
    }
};

function FormValidator(form) {
    this.form = form;
    this.fields = []; // instances of FieldValidator

    // Get all form fields
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
        if (
            input.hasAttribute('data-required') ||
            input.hasAttribute('data-email') ||
            input.hasAttribute('data-min-length')
        ) {
            this.fields.push(new FieldValidator(input));
        }
    });
}
FormValidator.prototype.init = function () {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
};
FormValidator.prototype.validate = function () {
    let isValid = true;

    this.fields.forEach((field) => {
        if (!field.validate()) {
            isValid = false;
        }
    });

    return isValid;
};
FormValidator.prototype.handleSubmit = function (event) {
    event.preventDefault();

    if (this.validate()) {
        console.log('form is valid');
        const formData = {};
        // get Form data
        this.form
            .querySelectorAll('input, textarea, select')
            .forEach((input) => {
                formData[input.name] = input.value;
            });
        console.log(`Form Data`, formData);
        // Send Form data
        fetch('url', formData);
    } else {
        console.log('form is NOT valid');
    }
};

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
    const validator = new FormValidator(form);

    validator.init();
});
