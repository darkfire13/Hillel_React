const ERROR_MSG = {
    required: 'This is required field',
    email: 'Email is not correct',
    minLength(text) {
        return `Min length should be ${text}`;
    },
    maxLength(text) {
        return `Max length should be ${text}`;
    },
    notValid: 'Value is not valid',
};

class FieldValidator {
    constructor(field) {
        this.field = field;
        this.errors = [];
    }

    validate() {
        let value = this.field.value.trim();
        this.errors = [];
        // Validate required field
        if (this.field.hasAttribute('data-required') && value === '') {
            this.errors.push(ERROR_MSG.required);
        }
        // Validate Email
        if (this.field.hasAttribute('data-email')) {
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            if (!emailRegex.test(value)) {
                this.errors.push(ERROR_MSG.email);
            }
        }
        // Validate Min Length
        if (this.field.hasAttribute('data-min-length')) {
            const minLength = this.field.getAttribute('data-min-length');
            if (value.length < minLength) {
                this.errors.push(ERROR_MSG.minLength(minLength));
            }
        }
        // Validate Max Length
        if (this.field.hasAttribute('data-max-length')) {
            const maxLength = this.field.getAttribute('data-max-length');
            if (value.length > maxLength) {
                this.errors.push(ERROR_MSG.maxLength(maxLength));
            }
        }
        // Validate pattern
        if (this.field.hasAttribute('data-pattern')) {
            const pattern = new RegExp(this.field.getAttribute('data-pattern'));

            if (!pattern.test(value)) {
                this.errors.push(ERROR_MSG.notValid);
            }
        }
        this.showErrors();

        return this.errors.length === 0;
    }

    showErrors() {
        let errorContainer = this.field.nextElementSibling;
        if (
            !errorContainer ||
            !errorContainer.classList.contains('error-msg')
        ) {
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
    }
}

class FormValidator {
    constructor(form) {
        this.form = form;
        this.fields = []; // instances of FieldValidator

        this.#initFields();
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        console.log(this);
    }

    #initFields() {
        // Get all form fields
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach((input) => {
            if (
                input.hasAttribute('data-required') ||
                input.hasAttribute('data-email') ||
                input.hasAttribute('data-min-length') ||
                input.hasAttribute('data-max-length')
            ) {
                this.fields.push(new FieldValidator(input));
            }
        });
    }

    validate() {
        let isValid = true;

        this.fields.forEach((field) => {
            if (!field.validate()) {
                isValid = false;
            }
        });

        return isValid;
    }

    handleSubmit(event) {
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
        } else {
            console.log('form is NOT valid');
        }
    }
}

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
    new FormValidator(form);
});
